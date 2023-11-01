using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public ProjectController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetProjects()
    {
        return Ok(_dbContext.Projects
        .Include(p => p.Category)
        .Include(p => p.UserProjects)
        .ThenInclude(up => up.UserProfile)
        .ToList());
    }

    [HttpGet("{userid}/forUser")]
    // [Authorize]
    public IActionResult GetProjectsForUser(int userid)
    {
        var userProjects = _dbContext.UserProjects
        .Where(up => up.UserProfileId == userid)
        .Select(up => up.ProjectId);

    var projectsForUser = _dbContext.Projects
        .Include(p => p.Category)
        .Include(p => p.UserProjects)
        .ThenInclude(up => up.UserProfile)
        .Where(p => userProjects.Contains(p.Id))
        .ToList();

    return Ok(projectsForUser);
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetById(int id)
    {
        Project project = _dbContext
            .Projects
            .Include(p => p.Category)
            .Include(p => p.ProjectNotes)
            .Include(p => p.ProjectTasks)
            .Include(p => p.UserProjects)
            .ThenInclude(up => up.UserProfile)
            .Include(p => p.UserProfiles)
            .SingleOrDefault(p => p.Id == id);

        if (project == null)
        {
            return NotFound();
        }

            return Ok(project);
    }

    [HttpPost]
    // [Authorize]
    public IActionResult CreateProject(Project project)
    {
        Project newProject = new Project
        {

        Id = _dbContext.Projects.Count() > 0 ? _dbContext.Projects.Max(p => p.Id) + 1 : 1,
        Title = project.Title,
        CategoryId = project.CategoryId

        };
        
        _dbContext.Projects.Add(newProject);

        foreach (UserProfile userProfile in project.UserProfiles)
        {
             _dbContext.UserProjects.Add (new UserProject
            {
                
                ProjectId = newProject.Id,
                UserProfileId = userProfile.Id

            }
             );
        }
        

        _dbContext.SaveChanges();
        return Created($"/api/project/{project.Id}", project);
    }

    [HttpPut("{id}")]
    // [Authorize]
    public IActionResult UpdateProject(Project project, int id)
    {
        Project projectToUpdate = _dbContext.Projects

        .SingleOrDefault(p => p.Id == id);
        if (projectToUpdate  == null)
        {
            return NotFound();
        }
        else if (id != project.Id)
        {
            return BadRequest();
        }

        //These are the only properties that we want to make editable
        projectToUpdate.Title = project.Title;
        projectToUpdate.CategoryId = project.CategoryId;

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpPut("{id}/complete")]
    // [Authorize]
    public IActionResult CompleteProject(int id)
    {
        Project projectToComplete = _dbContext.Projects.SingleOrDefault(wo => wo.Id == id);
        if (projectToComplete == null)
        {
            return NotFound();
        }

        //These are the only properties that we want to make editable
       projectToComplete.IsCompleted = true;
       
        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpPut("{id}/updateCompletion")]
    // [Authorize]
    public IActionResult UpdateProjectCompletion (int id, decimal progressNumber)
    {
        Project projectToUpdate = _dbContext.Projects.SingleOrDefault(wo => wo.Id == id);
        if (projectToUpdate == null)
        {
            return NotFound();
        }

        //These are the only properties that we want to make editable
       projectToUpdate.Completion = progressNumber;

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpPut("{id}/incomplete")]
    // [Authorize]
    public IActionResult IncompleteProject(int id)
    {
        Project projectToNotComplete = _dbContext.Projects.SingleOrDefault(wo => wo.Id == id);
        if (projectToNotComplete == null)
        {
            return NotFound();
        }

        //These are the only properties that we want to make editable
       projectToNotComplete.IsCompleted = false;
        

        _dbContext.SaveChanges();

        return NoContent();
    }
    // [HttpPut("{id}/complete")]
    // [Authorize]
    // public IActionResult CompleteWorkOrder(int id)
    // {
    //     WorkOrder workOrderToComplete = _dbContext.WorkOrders.SingleOrDefault(wo => wo.Id == id);
    //     if (workOrderToComplete == null)
    //     {
    //         return NotFound();
    //     }

    //     //These are the only properties that we want to make editable
    //     workOrderToComplete.DateCompleted = DateTime.Now;
        

    //     _dbContext.SaveChanges();

    //     return NoContent();
    // }

    [HttpDelete("{id}")]
    // [Authorize]
    public IActionResult DeleteProject(int id)
    {
        Project projectToDelete = _dbContext.Projects
        .Include(p => p.UserProjects)
        .Include(p => p.ProjectTasks)
        .SingleOrDefault(p => p.Id == id);
        if (projectToDelete == null)
        {
            return NotFound();
        }

        _dbContext.UserProjects.RemoveRange(projectToDelete.UserProjects);
        _dbContext.ProjectTasks.RemoveRange(projectToDelete.ProjectTasks);
        _dbContext.Projects.Remove(projectToDelete);
        _dbContext.SaveChanges();

        return NoContent();
    }
}