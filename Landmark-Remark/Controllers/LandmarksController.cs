﻿using System;
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
using System.Web.Http.Cors;
using Landmark_Remark.Models;

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
        public async Task<IHttpActionResult> GetLandmark(int id)
        {
            Landmark landmark = await db.Landmarks.FindAsync(id);
            if (landmark == null)
            {
                return NotFound();
            }

            return Ok(landmark);
        }

        // PUT: api/Landmarks/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutLandmark(int id, Landmark landmark)
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

        // POST: api/Landmarks
        [ResponseType(typeof(Landmark))]
        public async Task<IHttpActionResult> PostLandmark(Landmark landmark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Landmarks.Add(landmark);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = landmark.Id }, landmark);
        }

        // DELETE: api/Landmarks/5
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
            return db.Landmarks.Count(e => e.Id == id) > 0;
        }
    }
}