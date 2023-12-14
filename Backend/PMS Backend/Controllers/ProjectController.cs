using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PMS_Backend.DTO;
using PMS_Backend.Services.IServices;
using System.Net.Http.Headers;
using System.Net.Http;
using Microsoft.AspNetCore.Authentication;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;

namespace PMS_Backend.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ILogger<ProjectController> _logger;
        private readonly IProjectServices _projectServices;
        private readonly IAuthenticationServices _authenticationServices;

        public ProjectController(ILogger<ProjectController> logger, IHttpContextAccessor httpContextAccessor, IProjectServices projectServices, IAuthenticationServices authenticationServices)
        {
            _httpContextAccessor = httpContextAccessor;
            _logger = logger;
            _projectServices = projectServices;
            _authenticationServices = authenticationServices;
        }

        [Route("GetAllProjects")]
        [HttpPost]
        public async Task<IActionResult> GetAllProjects([FromBody] CommonFilterModel commonFilterModel)
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var userIdResponse = await _authenticationServices.GetTokenUserId(accessToken.ToString());
            var response = await _projectServices.GetAllProjects(Convert.ToInt32(userIdResponse.Data), commonFilterModel);
            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return StatusCode(500, response);
            }
        }

        [Route("AddProjectDetails")]
        [HttpPost]
        public async Task<IActionResult> AddProjectDetails(ProjectDetailsDTO projectDetailsDTO)
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");
            var userIdResponse = await _authenticationServices.GetTokenUserId(accessToken.ToString());
            var response = await _projectServices.AddProjectDetails(Convert.ToInt32(userIdResponse.Data), projectDetailsDTO);
            if (response.Success)
            {
                return Ok(response);
            }
            else
            {
                return StatusCode(500, response);
            }
        }
    }
}
