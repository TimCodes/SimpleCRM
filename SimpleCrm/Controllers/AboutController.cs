using Microsoft.AspNetCore.Mvc;

namespace SimpleCrm.Controllers
{
    /// <summary>
    ///     about controller 
    ///     uses [] token to direct framework to look for the contoller name 
    ///     in this case it says use this class when url contains the name about 
    /// </summary>
    [Route("[controller]")]
    public class AboutController
    {
        // this overides route config in startup.cs 
        [Route("")]
        public string Phone()
        {
            return "1-444-5555";
        }


    }
}
