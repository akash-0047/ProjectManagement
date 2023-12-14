using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PMS_Backend.Models
{
    public partial class ProjectDetail
    {
        [Key]
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
        public DateTime? CreatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? DeletedDate { get; set; }
        public int? DeletedBy { get; set; }
    }
}
