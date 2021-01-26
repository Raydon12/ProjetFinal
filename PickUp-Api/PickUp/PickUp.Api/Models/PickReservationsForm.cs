using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class PickReservationsForm
    {   
        [Required]
        public int ReservationId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public DateTime DateInput { get; set; }
        [Required]
        public int NumPersonne { get; set; }
    }
}
