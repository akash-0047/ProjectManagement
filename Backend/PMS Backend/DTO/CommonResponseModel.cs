namespace PMS_Backend.DTO
{
    public class CommonResponseModel
    {
        public bool Success { get; set; } = false;
        public string? Message { get; set; } = string.Empty;
        public object? Data { get; set; } = null;
    }
}
