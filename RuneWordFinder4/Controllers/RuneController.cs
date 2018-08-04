using Microsoft.AspNetCore.Mvc;
using RuneWordFinder4.Models.Repository;

namespace RuneWordFinder4.Controllers
{
    [System.Obsolete("Likely taken over by HomeController", false)]
    public class RuneController : Controller
    {
        private readonly MongoDataService dataService = new MongoDataService();

        public IActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            return View(dataService.FindRunes());
        }
    }
}