using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int? CategoryId { get; set; }
    public Category Category { get; set; }
    public DateTime DueDate { get; set; }
    public bool IsCompleted { get; set; }
    public decimal? Completion { get; set; }
    public List<ProjectNote> ProjectNotes { get; set; }
    public List<ProjectTask> ProjectTasks { get; set; }
    public List<UserProject> UserProjects { get; set; }
    public List<UserProfile> UserProfiles { get; set; }
   
    

    
}