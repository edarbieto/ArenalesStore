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
    public class ComprasController : ControllerBase
    {
        private readonly ArenalesStoreContext _context;

        public ComprasController(ArenalesStoreContext context)
        {
            _context = context;
        }

        // GET: api/Compras
        [HttpGet]
        public IEnumerable<Compra> GetCompras()
        {
            return _context.Compras;
        }

        // GET: api/Compras/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompra([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var compra = await _context.Compras.Include(c => c.Producto).Include(c => c.Usuario).FirstOrDefaultAsync(c => c.CompraID == id);

            if (compra == null)
            {
                return NotFound();
            }

            return Ok(compra);
        }

        // PUT: api/Compras/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompra([FromRoute] long id, [FromBody] Compra compra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != compra.CompraID)
            {
                return BadRequest();
            }

            _context.Entry(compra).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompraExists(id))
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

        // POST: api/Compras
        [HttpPost]
        public async Task<IActionResult> PostCompra([FromBody] Compra compra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            compra.Usuario = _context.Usuarios.Find(compra.Usuario.UsuarioID);
            compra.Producto = _context.Productos.Find(compra.Producto.ProductoID);

            _context.Compras.Add(compra);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompra", new { id = compra.CompraID }, compra);
        }

        // DELETE: api/Compras/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompra([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var compra = await _context.Compras.FindAsync(id);
            if (compra == null)
            {
                return NotFound();
            }

            _context.Compras.Remove(compra);
            await _context.SaveChangesAsync();

            return Ok(compra);
        }

        private bool CompraExists(long id)
        {
            return _context.Compras.Any(e => e.CompraID == id);
        }
    }
}