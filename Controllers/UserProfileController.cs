using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public UserProfileController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetUserProfiles()
    {
        return Ok(_dbContext.UserProfiles
        .Include(up => up.UserProjects)
        .ToList());
    }
    [HttpGet("{projectId}/userProfilesInProject")]
    // [Authorize]
    public IActionResult GetUserProfilesInProject(int projectId)
    {
        var userProfileIdsInProject = _dbContext.UserProjects
        .Where(up => up.ProjectId == projectId)
        .Select(up => up.UserProfileId)
        .ToList();

        var userProfilesInProject = _dbContext.UserProfiles
        .Where(up => userProfileIdsInProject.Contains(up.Id))
        .ToList();

        return Ok(userProfilesInProject);
    }

    [HttpGet("{projectId}/userProfilesNotInProject")]
    // [Authorize]
    public IActionResult GetUserProfilesNotInProject(int projectId)
    {
        var userProfileIdsInProject = _dbContext.UserProjects
        .Where(up => up.ProjectId == projectId)
        .Select(up => up.UserProfileId)
        .ToList();

        var userProfilesNotInProject = _dbContext.UserProfiles
        .Where(up => !userProfileIdsInProject.Contains(up.Id))
        .ToList();

        return Ok(userProfilesNotInProject);
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetById(int id)
    {
        UserProfile userProfile = _dbContext
            .UserProfiles
            .Include(p => p.IdentityUser)
            .SingleOrDefault(p => p.Id == id);

        if (userProfile == null)
        {
            return NotFound();
        }




            return Ok(userProfile);
    }

}