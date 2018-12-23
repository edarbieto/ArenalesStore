using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ArenalesStore.Data;
using ArenalesStore.Models;

namespace ArenalesStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiendasController : ControllerBase
    {
        private readonly ArenalesStoreContext _context;

        public TiendasController(ArenalesStoreContext context)
        {
            _context = context;
        }

        // GET: api/Tiendas
        [HttpGet]
        public IEnumerable<Tienda> GetTiendas()
        {
            return _context.Tiendas.Include(t => t.Productos);
        }

        [HttpGet("info")]
        public IEnumerable<Tienda> GetTiendasInfo()
        {
            return _context.Tiendas;
        }

        // GET: api/Tiendas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTienda([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tienda = await _context.Tiendas.Include(t => t.Productos).FirstAsync(t => t.TiendaID == id);

            if (tienda == null)
            {
                return NotFound();
            }

            return Ok(tienda);
        }

        // PUT: api/Tiendas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTienda([FromRoute] long id, [FromBody] Tienda tienda)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tienda.TiendaID)
            {
                return BadRequest();
            }

            _context.Entry(tienda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TiendaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tiendas
        [HttpPost]
        public async Task<IActionResult> PostTienda([FromBody] Tienda tienda)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tiendas.Add(tienda);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTienda", new { id = tienda.TiendaID }, tienda);
        }

        // DELETE: api/Tiendas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTienda([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tienda = await _context.Tiendas.FindAsync(id);
            if (tienda == null)
            {
                return NotFound();
            }

            _context.Tiendas.Remove(tienda);
            await _context.SaveChangesAsync();

            return Ok(tienda);
        }

        private bool TiendaExists(long id)
        {
            return _context.Tiendas.Any(e => e.TiendaID == id);
        }
    }
}