using Microsoft.AspNetCore.Mvc;

namespace WebTypeScript.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
