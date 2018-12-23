using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArenalesStore.Models
{
    public enum Origen
    {
        China, Japon, Corea
    }

    public class Producto
    {
        public long ProductoID { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public long NEstrellas { get; set; }
        public double Precio { get; set; }
        public Origen Origen { get; set; }
        public Tienda Tienda { get; set; }

        public List<Compra> Compras { get; set; }
    }
}
