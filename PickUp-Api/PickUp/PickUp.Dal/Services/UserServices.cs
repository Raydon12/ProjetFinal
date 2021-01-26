using AdoLibrary;
using PickUp.Dal.Interfaces;
using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace PickUp.Dal.Services
{
    public class UserServices : IUserServices<User>
    {
        private readonly IConnection connection;

        public UserServices(IConnection iConnection)
        {
            connection = iConnection;
        }
        private User Converter(SqlDataReader reader)
        {
            return new User(
                (int)reader["UserId"],
                reader["Name"].ToString(),
                reader["Description"].ToString(),
                (long)reader["PhoneNum"],
                reader["AdressStreet"].ToString(),
                (int)reader["AdressNum"],
                reader["AdressCity"].ToString(),
                (int)reader["AdresseZip"],
                reader["Logo"].ToString(),
                (decimal)reader["Latitude"],
                (decimal)reader["Longitude"],
                (decimal)reader["Rating"]
                );
        }
        private User ConverterLogin(SqlDataReader reader)
        {
            return new User(
                (int)reader["UserId"],
                reader["Name"].ToString(),
                reader["Email"].ToString(),
                reader["Description"].ToString(),
                reader["AdressStreet"].ToString(),
                (int)reader["AdressNum"],
                reader["AdressCity"].ToString(),
                (int)reader["AdresseZip"],
                (long)reader["PhoneNum"],
                reader["Logo"].ToString(),
                (decimal)reader["Latitude"],
                (decimal)reader["Longitude"]
                ) ;
        }
        public IEnumerable<User> GetAll()
        {
            Command cmd = new Command("GetAllUser", true);
            return connection.ExecuteReader<User>(cmd, Converter);
        }

        public IEnumerable<User> GetAllProNow()
        {
            Command cmd = new Command("GetAllUserNow", true);
            return connection.ExecuteReader<User>(cmd, Converter);
        }

        public IEnumerable<User> GetByCategoryId(int key)
        {
            Command cmd = new Command("GetUserByCategory", true);
            cmd.AddParameter("idCategory", key);
            return connection.ExecuteReader<User>(cmd, Converter);
        }

        public User GetById(int key)
        {
            Command cmd = new Command("UserGetById", true);
            cmd.AddParameter("RestoId", key);
            return connection.ExecuteReader<User>(cmd, Converter).FirstOrDefault();
        }

        public void Register(User entity)
        {
            Command cmd = new Command("RegisterUser", true);
            cmd.AddParameter("Name", entity.UserName);
            cmd.AddParameter("Email", entity.Email);
            cmd.AddParameter("Password", entity.Password);
            cmd.AddParameter("Description", entity.Description);
            cmd.AddParameter("AdressStreet", entity.AdressStreet);
            cmd.AddParameter("AdressNum", entity.AdressNum);
            cmd.AddParameter("AdressCity", entity.AdressCity);
            cmd.AddParameter("AdresseZip", entity.AdresseZip);
            cmd.AddParameter("PhoneNum", entity.PhoneNumber);
            cmd.AddParameter("Logo", entity.Logo);
            cmd.AddParameter("Latitude", entity.Latitude);
            cmd.AddParameter("Longitude", entity.Longitude);
            cmd.AddParameter("Rating", entity.Rating);
            connection.ExecuteNonQuery(cmd);
        }

        public User Login(string email, string password)
        {
            Command cmd = new Command("LoginUser", true);
            cmd.AddParameter("Email", email);
            cmd.AddParameter("Password", password);

            return connection.ExecuteReader(cmd, ConverterLogin).FirstOrDefault();
        }
    }
}
