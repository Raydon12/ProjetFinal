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
    public class EventServices : IEventServices<Event>
    {
        private readonly IConnection connection;

        public EventServices(IConnection co)
        {
            connection = co;
        }
        public Event Converter(SqlDataReader reader)
        {
            return new Event(
                (int)reader["EventId"],
                (int)reader["ProUserId"],
                reader["Name"].ToString(),
                reader["Description"].ToString(),
                reader["Logo"].ToString(),
                (decimal)reader["Rating"]);
        }

        public IEnumerable<Event> GetAll()
        {
            Command cmd = new Command("GetAllEvent", true);
            return connection.ExecuteReader<Event>(cmd, Converter);
        }

        public Event GetById(int key)
        {
            Command cmd = new Command("GetEventById", true);
            cmd.AddParameter("EventId", key);
            return connection.ExecuteReader<Event>(cmd, Converter).FirstOrDefault();
        }
    }
}
