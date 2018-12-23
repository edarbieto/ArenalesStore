using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArenalesStore.Models
{
    public class Compra
    {
        public long CompraID { get; set; }
        public Producto Producto { get; set; }
        public Usuario Usuario { get; set; }
        public DateTime FechaCompra { get; set; }
        public DateTime? FechaEntrega { get; set; }
        public long Cantidad { get; set; }
    }
}
