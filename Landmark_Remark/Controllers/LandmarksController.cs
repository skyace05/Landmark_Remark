using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Landmark_Remark.Models;
using System.Web.Http.Cors;

namespace Landmark_Remark.Controllers
{
    public class LandmarksController : ApiController
    {
        private LandmarkContext db = new LandmarkContext();

        // GET: api/Landmarks
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public IQueryable<Landmark> GetLandmarks()
        {
            return db.Landmarks;
        }

        // GET: api/Landmarks/5
        [ResponseType(typeof(Landmark))]
        public IHttpActionResult GetLandmark(int id)
        {
            Landmark landmark = db.Landmarks.Find(id);
            if (landmark == null)
            {
                return NotFound();
            }

            return Ok(landmark);
        }

        // PUT: api/Landmarks/5
        [ResponseType(typeof(void))]
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public IHttpActionResult PutLandmark(int id, Landmark landmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != landmark.Id)
            {
                return BadRequest();
            }

            db.Entry(landmark).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
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

        // POST: api/Landmarks
        [ResponseType(typeof(Landmark))]
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public IHttpActionResult PostLandmark(Landmark landmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Landmarks.Add(landmark);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = landmark.Id }, landmark);
        }

        // DELETE: api/Landmarks/5
        [ResponseType(typeof(Landmark))]
        public IHttpActionResult DeleteLandmark(int id)
        {
            Landmark landmark = db.Landmarks.Find(id);
            if (landmark == null)
            {
                return NotFound();
            }

            db.Landmarks.Remove(landmark);
            db.SaveChanges();

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
            return db.Landmarks.Count(e => e.Id == id) > 0;
        }
    }
}