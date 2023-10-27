using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProjectController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public UserProjectController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetProjects()
    {
        return Ok(_dbContext.UserProjects
        .Include(up => up.Project)
        .Include(up => up.UserProfile)
        .ToList());
    }

    [HttpGet("{projectId}/forProject")]
    // [Authorize]
    public IActionResult GetUserProjectsForProject(int projectId)
    {
        return Ok(_dbContext.UserProjects
        .Include(up => up.UserProfile)
        .Where(up => up.ProjectId == projectId)
        .ToList());
    }

    [HttpGet("{projectId}/notForProject")]
    // [Authorize]
    public IActionResult GetUserProjectsNotForProject(int projectId)
    {
        var userProfilesAssociatedWithProject = _dbContext.UserProjects
        .Where(up => up.ProjectId == projectId)
        .Select(up => up.UserProfileId)
        .ToList();

    var userProjectsNotForProject = _dbContext.UserProjects
        .Include(up => up.UserProfile)
        .Where(up => up.ProjectId != projectId && !userProfilesAssociatedWithProject.Contains(up.UserProfileId))
        .ToList();

    return Ok(userProjectsNotForProject);
    }

    //     [HttpGet("{projectId}/notForProject")]
    // // [Authorize]
    // public IActionResult GetUserProjectsNotForProject(int projectId)
    // {
    //     return Ok(_dbContext.UserProjects
    //     .Include(up => up.UserProfile)
    //     .Where(up => up.ProjectId != projectId)
    //     .ToList());
    // }

    // [HttpGet("{id}")]
    // // [Authorize]
    // public IActionResult GetById(int id)
    // {
    //     Project project = _dbContext
    //         .Projects
    //         .Include(p => p.Category)
    //         .Include(p => p.ProjectNotes)
    //         .Include(p => p.ProjectTasks)
    //         .Include(p => p.UserProjects)
    //         .ThenInclude(up => up.UserProfile)
    //         .SingleOrDefault(p => p.Id == id);

    //     if (project == null)
    //     {
    //         return NotFound();
    //     }

    //         return Ok(project);
    // }

    [HttpPost]
    // [Authorize]
    public IActionResult CreateUserProject(UserProject userProject)
    {
        
        _dbContext.UserProjects.Add(userProject);
        _dbContext.SaveChanges();
        return Created($"/api/userproject/{userProject.Id}", userProject);
    }

    // [HttpPut("{id}")]
    // [Authorize]
    // public IActionResult UpdateWorkOrder(WorkOrder workOrder, int id)
    // {
    //     WorkOrder workOrderToUpdate = _dbContext.WorkOrders.SingleOrDefault(wo => wo.Id == id);
    //     if (workOrderToUpdate == null)
    //     {
    //         return NotFound();
    //     }
    //     else if (id != workOrder.Id)
    //     {
    //         return BadRequest();
    //     }

    //     //These are the only properties that we want to make editable
    //     workOrderToUpdate.Description = workOrder.Description;
    //     workOrderToUpdate.UserProfileId = workOrder.UserProfileId;
    //     workOrderToUpdate.BikeId = workOrder.BikeId;

    //     _dbContext.SaveChanges();

    //     return NoContent();
    // }
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
        UserProject userProjectToDelete = _dbContext.UserProjects.SingleOrDefault(p => p.Id == id);
        if (userProjectToDelete == null)
        {
            return NotFound();
        }

    
        _dbContext.UserProjects.Remove(userProjectToDelete);
        _dbContext.SaveChanges();

        return NoContent();
    }
}