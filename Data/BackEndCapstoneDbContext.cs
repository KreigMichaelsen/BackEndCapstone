using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using BackEndCapstone.Models;
using Microsoft.AspNetCore.Identity;

namespace BackEndCapstone.Data;
public class BackEndCapstoneDbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    
    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<ProjectTask> ProjectTasks { get; set; }
    public DbSet<UserProject> UserProjects { get; set; }
    public DbSet<ProjectNote> ProjectNotes { get; set; }

    public BackEndCapstoneDbContext(DbContextOptions<BackEndCapstoneDbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole[]
        {
            new IdentityRole
            {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
            },
            new IdentityRole
            {
            Id = "50a26418-8379-41c5-9cb4-937ee3be79f3",
            Name = "User",
            NormalizedName = "user"
            }
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser[]
        {   
            new IdentityUser
            {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "KreigMichaelsen",
            Email = "kreig@michaelsen.com",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
            Id = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
            UserName = "KreigMichaelsen",
            Email = "kreig@michaelsen.com",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            }
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>[]
        {
            new IdentityUserRole<string>
            {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
            },
            new IdentityUserRole<string>
            {
            RoleId = "50a26418-8379-41c5-9cb4-937ee3be79f3",
            UserId = "b756857a-13c6-434e-a3ca-dc65ad4315a0"
            }
        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile[]
        {
            new UserProfile
            {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Kreig",
            LastName = "Michaelsen",
            },
            new UserProfile
            {
            Id = 2,
            IdentityUserId = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
            FirstName = "Normal",
            LastName = "User",
            }
        });

         modelBuilder.Entity<Category>().HasData(new Category[]
        {
            new Category
            {
                Id = 1,
                Title = "Personal"
            },
            new Category
            {
                Id = 2,
                Title = "Work"
            },
            new Category 
            {
                Id = 3,
                Title = "Finance"
            },
            new Category 
            {
                Id = 4,
                Title = "Health and Wellness"
            },
        });
        modelBuilder.Entity<Project>().HasData(new Project[]
        {
            new Project
            {
                Id = 1,
                Title = "Project #1",
                CategoryId = 1,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new Project
            {
                Id = 2,
                Title = "Project #2",
                CategoryId = 2,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new Project
            {
                Id = 3,
                Title = "Project #3",
                CategoryId = 3,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new Project
            {
                Id = 4,
                Title = "Project #4",
                CategoryId = 4,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new Project
            {
                Id = 5,
                Title = "Project #5",
                CategoryId = 5,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },

        });
        modelBuilder.Entity<ProjectTask>().HasData(new ProjectTask[]
        {
            new ProjectTask
            {
                Id = 1,
                Title = "Task #1",
                ProjectId = 1,
                UserProfileId = 1,
                CategoryId = 1,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new ProjectTask
            {
                Id = 2,
                Title = "Task #2",
                ProjectId = 1,
                UserProfileId = 2,
                CategoryId = 1,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new ProjectTask
            {
                Id = 3,
                Title = "Task #3",
                ProjectId = 2,
                UserProfileId = 1,
                CategoryId = 1,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            new ProjectTask
            {
                Id = 4,
                Title = "Task #4",
                ProjectId = 3,
                UserProfileId = 1,
                CategoryId = 1,
                DueDate = new DateTime(2023, 10, 20),
                IsCompleted = false
            },
            
        });
        modelBuilder.Entity<UserProject>().HasData(new UserProject[]
        {
            new UserProject
            {
                Id = 1,
                ProjectId = 1,
                UserProfileId = 1,
            },
            new UserProject
            {
                Id = 2,
                ProjectId = 1,
                UserProfileId = 2,
            },
            new UserProject
            {
                Id = 3,
                ProjectId = 2,
                UserProfileId = 1,
            },
            new UserProject
            {
                Id = 4,
                ProjectId = 3,
                UserProfileId = 1,
            },
        });
        modelBuilder.Entity<ProjectNote>().HasData(new ProjectNote[]
        {
            new ProjectNote
            {
                Id = 1,
                Title = "Filler",
                ProjectId = 1,
                UserProfileId = 1,
                Body = "Filler"
            },
            new ProjectNote
            {
                Id = 2,
                Title = "Filler",
                ProjectId = 2,
                UserProfileId = 1,
                Body = "Filler"
            },
            new ProjectNote
            {
                Id = 3,
                Title = "Filler",
                ProjectId = 3,
                UserProfileId = 1,
                Body = "Filler"
            },
            new ProjectNote
            {
                Id = 4,
                Title = "Filler",
                ProjectId = 4,
                UserProfileId = 1,
                Body = "Filler"
            },
        });

        
    }
}