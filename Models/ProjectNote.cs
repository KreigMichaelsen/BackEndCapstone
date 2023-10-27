using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Models;

public class ProjectNote
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int? UserProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
    public int? ProjectId { get; set; }
     public Project Project { get; set; }
    public string Body { get; set; }
    
}