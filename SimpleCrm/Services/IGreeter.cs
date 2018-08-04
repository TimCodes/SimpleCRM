using Microsoft.Extensions.Configuration;

namespace SimpleCrm.Services
{
    public interface IGreeter
    {
       string GetMessageOfTheDay();
    }

    public class Greeter : IGreeter
    {
        private IConfiguration _configuration;

        public Greeter(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GetMessageOfTheDay()
        {
            //return "Herro";
            return _configuration["Greeting"];
        }
    }
}