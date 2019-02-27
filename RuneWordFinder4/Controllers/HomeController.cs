using Microsoft.AspNetCore.Mvc;
using RuneWordFinder4.Models.Repository;
using NLog;
using RuneWordFinder4.Models;
using System.Collections.Generic;

namespace RuneWordFinder4.Controllers
{
    public class HomeController : Controller
    {
        private static readonly Logger log = LogManager.GetCurrentClassLogger();
        private readonly MongoDataService dataService = new MongoDataService();

        public IActionResult Index()
        {
            log.Debug("Entered HomeController.Index()");
            return View();
        }

        public ActionResult List()
        {
            log.Debug("Entered HomeController.List()");
            List<Runes> runes = dataService.GetRunes();
            log.Debug("Runes collection has {0} objects", runes.Count);
            return Json(runes);
        }

        [HttpPost]
        public IActionResult Search([FromBody] List<string> values)
        {
            log.Debug("Entered HomeController.Search()");
            values.ForEach(str=>log.Info(str));
            List<Runewords> runewords = dataService.GetRuneWords();

            foreach (Runewords runeword in runewords) {
                bool match = true;
                foreach (string rune in runeword.Runes)
                {
                   if (!values.Contains(rune))
                    {
                        match = false;
                        break;
                    }
                }

                if (match)
                {
                    log.Info("Runeword found: " + runeword.Name);
                }
            }

            return Json("");
        }
    }
}