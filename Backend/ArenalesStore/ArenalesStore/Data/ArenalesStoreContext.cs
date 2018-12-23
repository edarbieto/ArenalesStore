using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ArenalesStore.Models;

namespace ArenalesStore.Data
{
    public class ArenalesStoreContext : DbContext
    {
        public ArenalesStoreContext(DbContextOptions<ArenalesStoreContext> options) : base(options)
        {

        }

        public DbSet<Compra> Compras { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Tienda> Tiendas { get; set; }
        public DbSet<Producto> Productos { get; set; }
    }
}
