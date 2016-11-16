using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace IotApi.Controllers
{
    public class Measurement{
        public DateTime Time { get; set; }
        public double Temperature { get; set; }
        public double Humidity { get; set; }
    }

    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Measurement> Get()
        {
            var data = System.IO.File.ReadLines("data/data.json")
                        .Select(x =>JsonConvert.DeserializeObject<Measurement>(x));                                          
            return data;
        }

        // GET api/values/5
        [HttpGet("within/{days}/days")]        
        public IEnumerable<Measurement> Get(int days)
        {
            var rawdata = this.Get();
            var threashold = DateTime.Now.AddDays( -1 * days);

            return rawdata.Where(x => x.Time > threashold);                             
        }

        [HttpGet]
        [Route("data.csv")]
        [Produces("text/csv")]
        public ActionResult GetDataAsCsv()
        {
            return Ok(this.Get().ToList());
        }       
    }
}
