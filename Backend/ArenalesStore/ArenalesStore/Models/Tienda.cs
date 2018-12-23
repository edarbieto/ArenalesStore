using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArenalesStore.Models
{
    public enum Tipo
    {
        Fisica, Virtual
    }

    public class Tienda
    {
        public long TiendaID { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public long NEstrellas { get; set; }
        public Tipo Tipo { get; set; }

        public List<Producto> Productos { get; set; }
    }
}
