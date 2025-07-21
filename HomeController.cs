using Microsoft.AspNetCore.Mvc;
using YourProjectName.Models;

namespace YourProjectName.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var myProfile = new Profile
            {
                Name = "Your Name",
                FavoriteSport = "Basketball",
                Pet = "Dog",
                Bio = "I'm an ASP.NET Core student learning MVC!"
            };

            return View(myProfile);
        }
    }
}
