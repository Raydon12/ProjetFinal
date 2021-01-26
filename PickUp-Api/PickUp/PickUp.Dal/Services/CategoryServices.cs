using AdoLibrary;
using PickUp.Dal.Interfaces;
using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace PickUp.Dal.Services
{
    public class CategoryServices : ICategoryServices<Category>
    {
        private readonly IConnection connection;

        public CategoryServices(IConnection iConnection)
        {
            connection = iConnection;
        }
        private Category Converter(SqlDataReader reader)
        {
            return new Category(
                (int)reader["CategoryDetailId"],
                reader["CategoryName"].ToString()
            );
        }

        public IEnumerable<Category> GetAll()
        {
            Command cmd = new Command("GetAllCategory", true);
            return connection.ExecuteReader<Category>(cmd, Converter);
        }
    }
}
