using Microsoft.AspNetCore.Mvc;
using RuneWordFinder4.Models.Repository;
using NLog;

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

        public ActionResult List()
        {
            log.Info("Entered HomeController.List()");
            return View(dataService.FindRunes());
        }
    }
}