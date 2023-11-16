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
    [HttpGet("{userId}/forUser")]
    // [Authorize]
    public IActionResult GetProjectsForUser(int userId)
    {
        var userProjectsAssociatedWithLoggedInUser = _dbContext.UserProjects
        .Where(up => up.UserProfileId == userId)
        .ToList();

    return Ok(userProjectsAssociatedWithLoggedInUser);
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


    [HttpPost]
    // [Authorize]
    public IActionResult CreateUserProject(UserProject userProject)
    {
        _dbContext.UserProjects.Add(userProject);
        _dbContext.SaveChanges();
        return Created($"/api/userproject/{userProject.Id}", userProject);
    }

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