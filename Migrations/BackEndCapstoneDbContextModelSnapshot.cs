﻿// <auto-generated />
using System;
using BackEndCapstone.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace BackEndCapstone.Migrations
{
    [DbContext(typeof(BackEndCapstoneDbContext))]
    partial class BackEndCapstoneDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("BackEndCapstone.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Title = "Personal"
                        },
                        new
                        {
                            Id = 2,
                            Title = "Work"
                        },
                        new
                        {
                            Id = 3,
                            Title = "Finance"
                        },
                        new
                        {
                            Id = 4,
                            Title = "Health and Wellness"
                        });
                });

            modelBuilder.Entity("BackEndCapstone.Models.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("CategoryId")
                        .HasColumnType("integer");

                    b.Property<decimal?>("Completion")
                        .HasColumnType("numeric");

                    b.Property<DateTime>("DueDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("boolean");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Projects");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            Completion = 0m,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #1"
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 2,
                            Completion = 0m,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #2"
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 3,
                            Completion = 0m,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #3"
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 4,
                            Completion = 0m,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #4"
                        });
                });

            modelBuilder.Entity("BackEndCapstone.Models.ProjectNote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Body")
                        .HasColumnType("text");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<int?>("UserProfileId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserProfileId");

                    b.ToTable("ProjectNotes");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Body = "Filler",
                            ProjectId = 1,
                            Title = "Filler",
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 2,
                            Body = "Filler",
                            ProjectId = 2,
                            Title = "Filler",
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 3,
                            Body = "Filler",
                            ProjectId = 3,
                            Title = "Filler",
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 4,
                            Body = "Filler",
                            ProjectId = 4,
                            Title = "Filler",
                            UserProfileId = 1
                        });
                });

            modelBuilder.Entity("BackEndCapstone.Models.ProjectTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("CategoryId")
                        .HasColumnType("integer");

                    b.Property<DateTime?>("DueDate")
                        .HasColumnType("timestamp without time zone");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("boolean");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<int?>("UserProfileId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserProfileId");

                    b.ToTable("ProjectTasks");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CategoryId = 1,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            ProjectId = 1,
                            Title = "Task #1",
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 1,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            ProjectId = 1,
                            Title = "Task #2",
                            UserProfileId = 2
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 1,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            ProjectId = 2,
                            Title = "Task #3",
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 1,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            ProjectId = 3,
                            Title = "Task #4",
                            UserProfileId = 1
                        });
                });

            modelBuilder.Entity("BackEndCapstone.Models.UserProfile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("IdentityUserId")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("IdentityUserId");

                    b.HasIndex("ProjectId");

                    b.ToTable("UserProfiles");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            FirstName = "Kreig",
                            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            LastName = "Michaelsen"
                        },
                        new
                        {
                            Id = 2,
                            FirstName = "John",
                            IdentityUserId = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
                            LastName = "Smith"
                        },
                        new
                        {
                            Id = 3,
                            FirstName = "Jane",
                            IdentityUserId = "3fd717f1-78d5-4c52-8fd4-0f55ce185a5b",
                            LastName = "Doe"
                        });
                });

            modelBuilder.Entity("BackEndCapstone.Models.UserProject", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("ProjectId")
                        .HasColumnType("integer");

                    b.Property<int?>("UserProfileId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserProfileId");

                    b.ToTable("UserProjects");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            ProjectId = 1,
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 2,
                            ProjectId = 1,
                            UserProfileId = 2
                        },
                        new
                        {
                            Id = 3,
                            ProjectId = 2,
                            UserProfileId = 1
                        },
                        new
                        {
                            Id = 4,
                            ProjectId = 3,
                            UserProfileId = 1
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
                            ConcurrencyStamp = "b492488e-28b4-42e9-afe1-a9c98e9a373f",
                            Name = "Admin",
                            NormalizedName = "admin"
                        },
                        new
                        {
                            Id = "50a26418-8379-41c5-9cb4-937ee3be79f3",
                            ConcurrencyStamp = "3b139d0b-f050-4f44-bad7-a5f28892ed96",
                            Name = "User",
                            NormalizedName = "user"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "e6742134-8adb-4607-b4e4-a22314941ecc",
                            Email = "kreig@michaelsen.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAEJcZOEngXT5icdH/LC3BIrvS/V+N90L/vz/vgXrWBVjX0nCUqt/QzjUH4HFrPmkeFg==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "0c81d7a0-b6b1-4ad4-bee3-3db158cdbaa3",
                            TwoFactorEnabled = false,
                            UserName = "KreigMichaelsen"
                        },
                        new
                        {
                            Id = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "88713b18-d0a5-45d9-8a99-257b78f51906",
                            Email = "john@smith.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAEI5+JlooA6YBJg7cjltBYhiHKXTxxGHzRDDq4ZXXHHTZ42BKe8sjdqYns5xBWlU1hg==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "d6eb9c54-6e31-4eb9-9dac-bdb5bce9e602",
                            TwoFactorEnabled = false,
                            UserName = "JohnSmith"
                        },
                        new
                        {
                            Id = "3fd717f1-78d5-4c52-8fd4-0f55ce185a5b",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "26bae9e5-4e31-4f47-a69e-2a08895d4256",
                            Email = "Jane@Doe.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAEE1hGVhmtVgNQT6O1UzyetRQybzkDIQi0womsIcFQk09jMqPDNbyXmkVfOrfZhhbSQ==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "c7f20af0-2013-4c2f-a02d-865279a2349c",
                            TwoFactorEnabled = false,
                            UserName = "JaneDoe"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35"
                        },
                        new
                        {
                            UserId = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
                            RoleId = "50a26418-8379-41c5-9cb4-937ee3be79f3"
                        },
                        new
                        {
                            UserId = "3fd717f1-78d5-4c52-8fd4-0f55ce185a5b",
                            RoleId = "50a26418-8379-41c5-9cb4-937ee3be79f3"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("BackEndCapstone.Models.Project", b =>
                {
                    b.HasOne("BackEndCapstone.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId");

                    b.Navigation("Category");
                });

            modelBuilder.Entity("BackEndCapstone.Models.ProjectNote", b =>
                {
                    b.HasOne("BackEndCapstone.Models.Project", "Project")
                        .WithMany("ProjectNotes")
                        .HasForeignKey("ProjectId");

                    b.HasOne("BackEndCapstone.Models.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileId");

                    b.Navigation("Project");

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("BackEndCapstone.Models.ProjectTask", b =>
                {
                    b.HasOne("BackEndCapstone.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId");

                    b.HasOne("BackEndCapstone.Models.Project", "Project")
                        .WithMany("ProjectTasks")
                        .HasForeignKey("ProjectId");

                    b.HasOne("BackEndCapstone.Models.UserProfile", "UserProfile")
                        .WithMany()
                        .HasForeignKey("UserProfileId");

                    b.Navigation("Category");

                    b.Navigation("Project");

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("BackEndCapstone.Models.UserProfile", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", "IdentityUser")
                        .WithMany()
                        .HasForeignKey("IdentityUserId");

                    b.HasOne("BackEndCapstone.Models.Project", null)
                        .WithMany("UserProfiles")
                        .HasForeignKey("ProjectId");

                    b.Navigation("IdentityUser");
                });

            modelBuilder.Entity("BackEndCapstone.Models.UserProject", b =>
                {
                    b.HasOne("BackEndCapstone.Models.Project", "Project")
                        .WithMany("UserProjects")
                        .HasForeignKey("ProjectId");

                    b.HasOne("BackEndCapstone.Models.UserProfile", "UserProfile")
                        .WithMany("UserProjects")
                        .HasForeignKey("UserProfileId");

                    b.Navigation("Project");

                    b.Navigation("UserProfile");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("BackEndCapstone.Models.Project", b =>
                {
                    b.Navigation("ProjectNotes");

                    b.Navigation("ProjectTasks");

                    b.Navigation("UserProfiles");

                    b.Navigation("UserProjects");
                });

            modelBuilder.Entity("BackEndCapstone.Models.UserProfile", b =>
                {
                    b.Navigation("UserProjects");
                });
#pragma warning restore 612, 618
        }
    }
}
