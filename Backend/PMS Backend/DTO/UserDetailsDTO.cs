using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PMS_Backend.DTO
{
    public class UserDetailsDTO
    {
        public int UserId { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Token { get; set; }
    }
}
