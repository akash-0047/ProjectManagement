using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using PMS_Backend.DTO;
using PMS_Backend.Models;
using PMS_Backend.Services.IServices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PMS_Backend.Services
{
    public class AuthenticationServices : PMSBaseRepository, IAuthenticationServices
    {
        public AuthenticationServices(PMSDBContext context) : base(context) { }

        public async Task<CommonResponseModel> Login(UserDetailsDTO userDetailsDTO)
        {
            CommonResponseModel commonResponseModel = new CommonResponseModel();
            try
            {
                var result = await _context.UserDetails.FirstOrDefaultAsync(u => u.Email == userDetailsDTO.Email && u.Password == userDetailsDTO.Password);
                if (result != null)
                {
                    var _claims = new[] {
                        new Claim("id", result.UserId.ToString())
                    };
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                    var tokeOptions = new JwtSecurityToken(
                        issuer: "https://localhost:5001",
                        audience: "https://localhost:5001",
                        claims: _claims,
                        expires: DateTime.Now.AddHours(1),
                        signingCredentials: signinCredentials
                    );
                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                    userDetailsDTO.UserId = result.UserId;
                    userDetailsDTO.Password = string.Empty;
                    userDetailsDTO.Token = tokenString;
                    commonResponseModel.Success = true;
                    commonResponseModel.Message = "User has authorized successfully.";
                    commonResponseModel.Data = userDetailsDTO;
                }
                else
                {
                    commonResponseModel.Message = "Unable to authenticate user!";
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.WriteLine(ex.Message);
                commonResponseModel.Message = "Error while authenticate user!";
            }
            return commonResponseModel;
        }

        public async Task<CommonResponseModel> GetTokenUserId(string token)
        {
            CommonResponseModel commonResponseModel = new CommonResponseModel();
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));

                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = secretKey,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = int.Parse(jwtToken.Claims.First(x => x.Type == "id").Value);
                commonResponseModel.Success = true;
                commonResponseModel.Message = "User id has been get successfully.";
                commonResponseModel.Data = userId;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.WriteLine(ex.Message);
                commonResponseModel.Message = "Error while get user id!";
            }
            return commonResponseModel;
        }

    }
}
