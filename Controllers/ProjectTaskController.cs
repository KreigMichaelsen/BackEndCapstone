using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectTaskController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public ProjectTaskController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetTasks()
    {
        return Ok(_dbContext.ProjectTasks
        .ToList());
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetById(int id)
    {
        ProjectTask projectTask = _dbContext
            .ProjectTasks
            .Include(pt => pt.Category)
            .Include(pt => pt.UserProfile)
            .Include(pt => pt.Project)
            .SingleOrDefault(p => p.Id == id);

        if (projectTask == null)
        {
            return NotFound();
        }

            return Ok(projectTask);
    }

    [HttpPost]
    // [Authorize]
    public IActionResult CreateProjectTask(ProjectTask projectTask)
    {
        int newId = _dbContext.ProjectTasks.Count() > 0 ? _dbContext.ProjectTasks.Max(p => p.Id) + 1 : 1;
        projectTask.Id = newId;
        _dbContext.ProjectTasks.Add(projectTask);
        _dbContext.SaveChanges();
        return Created($"/api/project/{projectTask.Id}", projectTask);
    }

    [HttpPut("{id}")]
    [Authorize]
    public IActionResult UpdateTask (ProjectTask projectTask, int id)
    {
        ProjectTask projectTaskToUpdate = _dbContext.ProjectTasks.SingleOrDefault(pt => pt.Id == id);
        if (projectTaskToUpdate == null)
        {
            return NotFound();
        }
        else if (id != projectTask.Id)
        {
            return BadRequest();
        }

        //These are the only properties that we want to make editable
        projectTaskToUpdate.ProjectId = projectTask.ProjectId;
        projectTaskToUpdate.UserProfileId = projectTask.UserProfileId;
        projectTaskToUpdate.CategoryId = projectTask.CategoryId;
        projectTaskToUpdate.DueDate = projectTask.DueDate;
        projectTaskToUpdate.Title = projectTask.Title;


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
    public IActionResult DeleteProjectTask(int id)
    {
        ProjectTask projectTaskToDelete = _dbContext.ProjectTasks.SingleOrDefault(pt => pt.Id == id);
        if (projectTaskToDelete== null)
        {
            return NotFound();
        }

    
        _dbContext.ProjectTasks.Remove(projectTaskToDelete);
        _dbContext.SaveChanges();

        return NoContent();
    }
}