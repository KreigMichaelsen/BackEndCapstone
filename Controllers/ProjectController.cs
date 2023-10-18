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
        .Include(p => p.ProjectNotes)
        .Include(p => p.ProjectTasks)
        .Include(p => p.UserProjects)

        .ToList());
    }

    // [HttpPost]
    // [Authorize]
    // public IActionResult CreateWorkOrder(WorkOrder workOrder)
    // {
    //     workOrder.DateInitiated = DateTime.Now;
    //     _dbContext.WorkOrders.Add(workOrder);
    //     _dbContext.SaveChanges();
    //     return Created($"/api/workorder/{workOrder.Id}", workOrder);
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