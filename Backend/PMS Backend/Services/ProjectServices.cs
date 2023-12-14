using Microsoft.EntityFrameworkCore;
using PMS_Backend.DTO;
using PMS_Backend.Models;
using PMS_Backend.Services.IServices;
using System.Reflection;
using System.Text;

namespace PMS_Backend.Services
{
    public class ProjectServices : PMSBaseRepository, IProjectServices
    {
        public ProjectServices(PMSDBContext context) : base(context) { }

        public async Task<CommonResponseModel> GetAllProjects(int UserId, CommonFilterModel commonFilterModel)
        {
            CommonResponseModel commonResponseModel = new CommonResponseModel();
            ProjectsResponseModel projectsResponseModel = new ProjectsResponseModel();
            List<ProjectDetailsDTO> projectDetailsDTOList = new List<ProjectDetailsDTO>();
            try
            {
                var result = await _context.ProjectDetails.ToListAsync();
                projectsResponseModel.TotalProjectsCount = result.Count();

                if (!string.IsNullOrEmpty(commonFilterModel.SearchKeyValue))
                {
                    result = result.Where(x => x.ProjectName.ToString().ToLower().Contains(commonFilterModel.SearchKeyValue.ToString().ToLower())).ToList();
                }
                
                if (string.IsNullOrEmpty(commonFilterModel.OrderBy))
                {
                    commonFilterModel.OrderBy = "ProjectName";
                }

                result = result.OrderBy(p => p.GetType().GetProperty(commonFilterModel.OrderBy).GetValue(p, null))
                    .Skip((commonFilterModel.PageNumber - 1) * commonFilterModel.PageSize)
                    .Take(commonFilterModel.PageSize)
                    .ToList();

                foreach (var item in result)
                {
                    ProjectDetailsDTO projectDetails = new ProjectDetailsDTO();
                    projectDetails.ProjectId = item.ProjectId;
                    projectDetails.ProjectName = item.ProjectName;
                    projectDetails.Reason = item.Reason;
                    projectDetails.Type = item.Type;
                    projectDetails.Division = item.Division;
                    projectDetails.Category = item.Category;
                    projectDetails.Priority = item.Priority;
                    projectDetails.Department = item.Department;
                    projectDetails.ProjectStartDate = item.ProjectStartDate;
                    projectDetails.ProjectEndDate = item.ProjectEndDate;
                    projectDetails.Location = item.Location;
                    projectDetails.Status = item.Status;
                    projectDetailsDTOList.Add(projectDetails);
                }
                projectsResponseModel.ProjectDetailsDTOs = projectDetailsDTOList;
                projectsResponseModel.TotalFiltersCount = result.Count();
                commonResponseModel.Success = true;
                commonResponseModel.Message = "Successfully get all projects.";
                commonResponseModel.Data = projectsResponseModel;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.WriteLine(ex.Message);
                commonResponseModel.Message = "Error while get all projects!";
            }
            return commonResponseModel;
        }

        public async Task<CommonResponseModel> AddProjectDetails(int UserId, ProjectDetailsDTO projectDetailsDTO)
        {
            CommonResponseModel commonResponseModel = new CommonResponseModel();
            try
            {
                ProjectDetail projectDetail = new ProjectDetail();
                projectDetail.ProjectName = projectDetailsDTO.ProjectName;
                projectDetail.Reason = projectDetailsDTO.Reason;
                projectDetail.Type = projectDetailsDTO.Type;
                projectDetail.Division = projectDetailsDTO.Division;
                projectDetail.Category = projectDetailsDTO.Category;
                projectDetail.Priority = projectDetailsDTO.Priority;
                projectDetail.Department = projectDetailsDTO.Department;
                projectDetail.ProjectStartDate = projectDetailsDTO.ProjectStartDate;
                projectDetail.ProjectEndDate = projectDetailsDTO.ProjectEndDate;
                projectDetail.Location = projectDetailsDTO.Location;
                projectDetail.Status = projectDetailsDTO.Status;
                projectDetail.CreatedDate = DateTime.Now;
                projectDetail.CreatedBy = UserId;
                await _context.ProjectDetails.AddAsync(projectDetail);
                await _context.SaveChangesAsync();
                commonResponseModel.Success = true;
                commonResponseModel.Message = "Project details has been inserted successfully.";
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.WriteLine(ex.Message);
                commonResponseModel.Message = "Error while instering project details!";
            }
            return commonResponseModel;
        }
    }
}
