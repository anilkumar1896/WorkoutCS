using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL;
namespace Services.Controllers
{
    public class CategoriesController : ApiController
    {
        casestudyEntities obj = new casestudyEntities();
        public IHttpActionResult Get()
        {
            var repo = new Class1();

            return Ok(repo.getall());
        }
        public IHttpActionResult Get(int? id)
        {
            var repo = new Class1();
            repo.getid(id.Value);
            return Ok(repo);
        }
        public IHttpActionResult Post(workout_category obj1)
        {
            var repo = new Class1();
            repo.add(obj1);
         
            if (repo != null)
            {
                return StatusCode(HttpStatusCode.Created);
            }
            {
                return BadRequest("not exist");
            }

        }
        public IHttpActionResult Put(workout_category obj1)
        {
            var repo = new Class1();
            repo.put(obj1);

           
            if (repo != null)
            {
                return StatusCode(HttpStatusCode.Accepted);
            }
            else
            {
                return BadRequest("not exist");
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var repo = new Class1();
            repo.Delete(id);
            if (repo == null)
            {
                return NotFound();
            }
            
          
            if (repo != null)
            {
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return BadRequest("not");
            }
        }


    }
}
