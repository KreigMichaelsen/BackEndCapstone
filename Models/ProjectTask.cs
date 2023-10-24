using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Models;

public class ProjectTask
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int? ProjectId { get; set; }
    public Project Project { get; set; }
    public int? UserProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
    public int? CategoryId { get; set; }
    public Category Category { get; set; }
    public DateTime? DueDate { get; set; }
    public bool IsCompleted { get; set; }
}