using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PMS_Backend.Models
{
    public partial class UserDetail
    {
        [Key]
        public int UserId { get; set; }
        [StringLength(320)]
        [Unicode(false)]
        public string? Email { get; set; }
        public string? Password { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
