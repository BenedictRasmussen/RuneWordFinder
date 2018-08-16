using Microsoft.AspNetCore.Mvc;
using RuneWordFinder4.Models.Repository;
using NLog;
using RuneWordFinder4.Models;

namespace RuneWordFinder4.Controllers
{
    public class HomeController : Controller
    {
        private static readonly Logger log = LogManager.GetCurrentClassLogger();
        private readonly MongoDataService dataService = new MongoDataService();

        public IActionResult Index()
        {
            log.Info("Entered HomeController.Index()");
            return View();
        }

        public IActionResult List()
        {
            log.Info("Entered HomeController.List()");
            return Json(dataService.FindRunes());
        }
    }
}