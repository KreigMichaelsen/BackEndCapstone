using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public CategoryController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetCategories()
    {
        return Ok(_dbContext.Categories
        .ToList());
    }

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

    // [HttpPost]
    // // [Authorize]
    // public IActionResult CreateProject(Project project)
    // {
        
    //     _dbContext.Projects.Add(project);
    //     _dbContext.SaveChanges();
    //     return Created($"/api/project/{project.Id}", project);
    // }

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

    // [HttpDelete("{id}/delete")]
    // [Authorize]
    // public IActionResult DeleteWorkOrder(int id)
    // {
    //     WorkOrder workOrderToDelete = _dbContext.WorkOrders.SingleOrDefault(wo => wo.Id == id);
    //     if (workOrderToDelete== null)
    //     {
    //         return NotFound();
    //     }

    
    //     _dbContext.WorkOrders.Remove(workOrderToDelete);
    //     _dbContext.SaveChanges();

    //     return NoContent();
    // }
}