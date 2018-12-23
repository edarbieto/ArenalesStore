using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ArenalesStore.Models;
using Microsoft.EntityFrameworkCore;

namespace ArenalesStore.Data
{
    public class DbInitializer
    {
        public static void Initialize(ArenalesStoreContext context)
        {
            //Descomentar para reiniciar la base de datos y luego comentar de nuevo
            context.Database.EnsureDeleted();

            if (context.Database.EnsureCreated()){
                context.Database.ExecuteSqlCommand(File.ReadAllText(Path.Combine(Environment.CurrentDirectory, @"Scripts\", "Usuarios.sql")));
                context.Database.ExecuteSqlCommand(File.ReadAllText(Path.Combine(Environment.CurrentDirectory, @"Scripts\", "Tiendas.sql")));
                context.Database.ExecuteSqlCommand(File.ReadAllText(Path.Combine(Environment.CurrentDirectory, @"Scripts\", "Productos.sql")));
                context.Database.ExecuteSqlCommand(File.ReadAllText(Path.Combine(Environment.CurrentDirectory, @"Scripts\", "Compras.sql")));
            }

            
        }



    }
}
