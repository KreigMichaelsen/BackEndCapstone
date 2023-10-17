using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Models;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int CategoryId { get; set; }
    public DateTime DueDate { get; set; }
    public bool IsCompleted { get; set; }
    

    
}