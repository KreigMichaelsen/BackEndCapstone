using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectNoteController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public ProjectNoteController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetNotes()
    {
        return Ok(_dbContext.ProjectNotes
        .Include(pt => pt.UserProfile)
        .Include(pt => pt.Project)
        .ToList());
    }

    [HttpGet("{projectId}/forProject")]
    // [Authorize]
    public IActionResult GetNotesForProject(int projectId)
    {
        return Ok(_dbContext.ProjectNotes
        .Include(pt => pt.UserProfile)
        .Where(pn => pn.ProjectId == projectId)
        .ToList());
    }

    [HttpGet("{id}")]
    // [Authorize]
    public IActionResult GetById(int id)
    {
        ProjectNote projectNote = _dbContext.ProjectNotes
            .Include(pt => pt.UserProfile)
            .Include(pt => pt.Project)
            .SingleOrDefault(p => p.Id == id);

        if (projectNote == null)
        {
            return NotFound();
        }

            return Ok(projectNote);
    }

    [HttpPost]
    // [Authorize]
    public IActionResult CreateProjectNote(ProjectNote projectNote)
    {
        
        _dbContext.ProjectNotes.Add(projectNote);
        _dbContext.SaveChanges();
        return Created($"/api/projectNote/{projectNote.Id}", projectNote);
    }

    [HttpPut("{id}")]
    // [Authorize]
    public IActionResult UpdateNote (ProjectNote projectNote, int id)
    {
        ProjectNote projectNoteToUpdate = _dbContext.ProjectNotes.SingleOrDefault(pt => pt.Id == id);
        if (projectNoteToUpdate == null)
        {
            return NotFound();
        }
        else if (id != projectNote.Id)
        {
            return BadRequest();
        }

        //These are the only properties that we want to make editable
        projectNoteToUpdate.ProjectId = projectNote.ProjectId;
        projectNoteToUpdate.UserProfileId = projectNote.UserProfileId;
        projectNoteToUpdate.Body = projectNote.Body;
        projectNoteToUpdate.Title = projectNote.Title;


        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    // [Authorize]
    public IActionResult DeleteProjectNote(int id)
    {
        ProjectNote projectNoteToDelete = _dbContext.ProjectNotes.SingleOrDefault(pn => pn.Id == id);
        if (projectNoteToDelete == null)
        {
            return NotFound();
        }

    
        _dbContext.ProjectNotes.Remove(projectNoteToDelete);
        _dbContext.SaveChanges();

        return NoContent();
    }
}