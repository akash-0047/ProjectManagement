using Microsoft.AspNetCore.Mvc;
using PMS_Backend.DTO;

namespace PMS_Backend.Services.IServices
{
    public interface IProjectServices
    {
        Task<CommonResponseModel> GetAllProjects(int UserId, CommonFilterModel commonFilterModel);
        Task<CommonResponseModel> AddProjectDetails(int UserId, ProjectDetailsDTO projectDetailsDTO);
    }
}
