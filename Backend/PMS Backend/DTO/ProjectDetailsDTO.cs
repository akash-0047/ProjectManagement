namespace PMS_Backend.DTO
{
    public class ProjectDetailsDTO
    {
        public int ProjectId { get; set; }
        public string? ProjectName { get; set; }
        public string? Reason { get; set; }
        public string? Type { get; set; }
        public string? Division { get; set; }
        public string? Category { get; set; }
        public string? Priority { get; set; }
        public string? Department { get; set; }
        public DateTime? ProjectStartDate { get; set; }
        public DateTime? ProjectEndDate { get; set; }
        public string? Location { get; set; }
        public string? Status { get; set; }
    }

    public class ProjectsResponseModel
    {
        public int TotalFiltersCount { get; set; } = 0;
        public int TotalProjectsCount { get; set; } = 0;
        public List<ProjectDetailsDTO>? ProjectDetailsDTOs { get; set; }
    }
}
