namespace PMS_Backend.DTO
{
    public class CommonFilterModel
    {
        const int maxPageSize = 10;
        public int PageNumber { get; set; } = 1;
        private int _pageSize = 10;
        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = (value < maxPageSize) ? maxPageSize : value;
            }
        }
        public string? OrderBy { get; set; }

        public string? SearchKeyValue { get; set; }
    }
}
