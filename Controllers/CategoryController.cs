using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using BackEndCapstone.Data;
using BackEndCapstone.Models;
namespace BackEndCapstone.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private BackEndCapstoneDbContext _dbContext;

    public CategoryController(BackEndCapstoneDbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    // [Authorize]
    public IActionResult GetCategories()
    {
        return Ok(_dbContext.Categories
        .ToList());
    }


}