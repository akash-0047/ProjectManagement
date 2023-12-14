using PMS_Backend.DTO;

namespace PMS_Backend.Services.IServices
{
    public interface IAuthenticationServices
    {
        Task<CommonResponseModel> Login(UserDetailsDTO userDetailsDTO);
        Task<CommonResponseModel> GetTokenUserId(string token);
    }
}
