using Microsoft.AspNetCore.Mvc;
using PMS_Backend.DTO;
using PMS_Backend.Services.IServices;

namespace PMS_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly ILogger<AuthenticationController> _logger;
        private readonly IAuthenticationServices _authenticationServices;

        public AuthenticationController(ILogger<AuthenticationController> logger, IAuthenticationServices authenticationServices)
        {
            _logger = logger;
            _authenticationServices = authenticationServices;
        }

        [Route("Login")]
        [HttpPost]
        public async Task<IActionResult> Login(UserDetailsDTO userDetailsDTO)
        {
            var response = await _authenticationServices.Login(userDetailsDTO);
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
