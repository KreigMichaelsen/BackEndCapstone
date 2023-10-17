using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Models;

public class UserProject
{
    public int Id { get; set; }
    public int UserProfileId { get; set; }
    public int ProjectId { get; set; }
    
}