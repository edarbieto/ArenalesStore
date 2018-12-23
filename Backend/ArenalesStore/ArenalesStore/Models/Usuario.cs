using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArenalesStore.Models
{
    public class Usuario
    {
        public long UsuarioID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Nickname { get; set; }

        public List<Compra> Compras { get; set; }
    }
}
