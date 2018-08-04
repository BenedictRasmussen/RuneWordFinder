using Microsoft.AspNetCore.Mvc;
using RuneWordFinder4.Models.Repository;
namespace RuneWordFinder4.Controllers
{
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