using AdoLibrary;
using PickUp.Dal.Interfaces;
using System.Data.SqlClient;
using System.Linq;

namespace PickUp.Dal.Services
{
    public class CustomerServices : ICustomerServices<Customer>
    {
        private readonly IConnection connection;

        public CustomerServices(IConnection Iconnection)
        {
            connection = Iconnection;
        }
        private Customer Converter(SqlDataReader reader)
        {
            return new Customer(
                (int)reader["CustomerId"],
                reader["FirstName"].ToString(),
                reader["LastName"].ToString(),
                (long)reader["PhoneNumber"],
                reader["Email"].ToString(),
                (string)reader["Image"].ToString(),
                (string)reader["PushNotificationToken"].ToString()
                );
        }
        public Customer Login(string email, string password)
        {
            Command cmd = new Command("Login", true);
            cmd.AddParameter("Email", email);
            cmd.AddParameter("Password", password);

            return connection.ExecuteReader(cmd, Converter).FirstOrDefault();
        }

        public void Register(Customer entity)
        {
            Command cmd = new Command("RegisterCustomer", true);
            cmd.AddParameter("FirstName", entity.FirstName);
            cmd.AddParameter("LastName", entity.LastName);
            cmd.AddParameter("PhoneNumber", entity.PhoneNumber);
            cmd.AddParameter("Email", entity.Email);
            cmd.AddParameter("Password", entity.Password);
            // cmd.AddParameter("Image", entity.Image);
            cmd.AddParameter("PushNotificationsToken", entity.PushNotificationsToken);
            connection.ExecuteNonQuery(cmd);
        }

        public bool Update(Customer entity)
        {
            Command cmd = new Command("UpdateCustomer", true);
            cmd.AddParameter("CustomerId", entity.CustomerId);
            cmd.AddParameter("Image", entity.Image);

            return connection.ExecuteNonQuery(cmd) == 1;
        }
    }
}
