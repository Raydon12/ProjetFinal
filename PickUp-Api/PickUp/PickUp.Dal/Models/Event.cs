using System;
using System.Collections.Generic;
using System.Text;

namespace PickUp.Dal.Models
{
    public class Event
    {
        public int RestoId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Logo { get; set; }
        public decimal Rating { get; set; }

        public Event(int id, int restoId, string name, string description, string logo, decimal rating)
        {
            Id = id;
            RestoId = restoId;
            Name = name;
            Description = description;
            Logo = logo;
            Rating = rating;
        }

        public Event(int id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
        }
    }
}
