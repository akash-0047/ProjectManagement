using PMS_Backend.Models;

namespace PMS_Backend.Services
{
    public class PMSBaseRepository
    {
        protected readonly PMSDBContext _context;
        public PMSBaseRepository(PMSDBContext context) 
        {
            _context = context;
        }
    }
}
