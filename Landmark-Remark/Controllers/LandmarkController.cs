using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Landmark_Remark.Models;

namespace Landmark_Remark.Controllers
{
    public class LandmarkController : ApiController
    {
        private LandmarkContext db = new LandmarkContext();

        // GET: api/Landmark
        public IQueryable<Landmark> GetLandmarks()
        {
            return db.Landmark;
        }

        // GET: api/Landmark/5
        [ResponseType(typeof(Landmark))]
        public async Task<IHttpActionResult> GetLandmark(int id)
        {
            Landmark landmark = await db.Landmark.FindAsync(id);
            if (landmark == null)
            {
                return NotFound();
            }

            return Ok(landmark);
        }

        // PUT: api/Landmark/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutLandmark(int id, Landmark landmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != landmark.id)
            {
                return BadRequest();
            }

            db.Entry(landmark).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LandmarkExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Landmark
        [ResponseType(typeof(Landmark))]
        public async Task<IHttpActionResult> PostLandmark(Landmark landmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Landmarks.Add(landmark);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = landmark.id }, landmark);
        }

        // DELETE: api/Landmark/5
        [ResponseType(typeof(Landmark))]
        public async Task<IHttpActionResult> DeleteLandmark(int id)
        {
            Landmark landmark = await db.Landmarks.FindAsync(id);
            if (landmark == null)
            {
                return NotFound();
            }

            db.Landmarks.Remove(landmark);
            await db.SaveChangesAsync();

            return Ok(landmark);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LandmarkExists(int id)
        {
            return db.Landmarks.Count(e => e.id == id) > 0;
        }
    }
}