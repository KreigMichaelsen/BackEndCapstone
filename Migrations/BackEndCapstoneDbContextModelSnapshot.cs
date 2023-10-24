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
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #1"
                        },
                        new
                        {
                            Id = 2,
                            CategoryId = 2,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #2"
                        },
                        new
                        {
                            Id = 3,
                            CategoryId = 3,
                            DueDate = new DateTime(2023, 10, 20, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            IsCompleted = false,
                            Title = "Project #3"
                        },
                        new
                        {
                            Id = 4,
                            CategoryId = 4,
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

                    b.Property<int>("ProjectId")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<int>("UserProfileId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

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

                    b.Property<DateTime>("DueDate")
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
                            FirstName = "Normal",
                            IdentityUserId = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
                            LastName = "User"
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
                            ConcurrencyStamp = "9c6c245d-4e64-434f-92d2-e79e30fcb468",
                            Name = "Admin",
                            NormalizedName = "admin"
                        },
                        new
                        {
                            Id = "50a26418-8379-41c5-9cb4-937ee3be79f3",
                            ConcurrencyStamp = "89e51e6d-09f8-4793-a47f-867790eba18d",
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
                            ConcurrencyStamp = "436224b3-892a-4714-a7f0-d30d4ebd0d1c",
                            Email = "kreig@michaelsen.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAENQUIFNdEfZz1aaqY+FpPgBV7aIy5l4XjLxGcq9D1cPoXvH0OyjfS0d0+7Ls18/2hA==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "c5ca1cb0-95ce-4b20-a2ae-34d05e238a4e",
                            TwoFactorEnabled = false,
                            UserName = "KreigMichaelsen"
                        },
                        new
                        {
                            Id = "b756857a-13c6-434e-a3ca-dc65ad4315a0",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "4c2ef1aa-09a5-46ea-869b-acb890c8400a",
                            Email = "normal@user.com",
                            EmailConfirmed = false,
                            LockoutEnabled = false,
                            PasswordHash = "AQAAAAEAACcQAAAAEGXaVQn3eAkuTsIv57tf6exBAYhdc6RXvyyv46BGAuNFIZLTXcZtEULfAGbSeT90wA==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "9ffcbf2d-6649-4311-a336-f4b62d83090f",
                            TwoFactorEnabled = false,
                            UserName = "NormalUser"
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
                    b.HasOne("BackEndCapstone.Models.Project", null)
                        .WithMany("ProjectNotes")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
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
                        .WithMany()
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
#pragma warning restore 612, 618
        }
    }
}
