using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Models;

public class Category
{
    public int Id { get; set; }
    public string Title { get; set; }

    
}