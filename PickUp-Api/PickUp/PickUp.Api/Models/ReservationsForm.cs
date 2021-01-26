using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class ReservationsForm
    {
       [Required]
        public int UserId { get; set; }
        [Required]
        public DateTime DateRes { get; set; }
        [Required]
        public DateTime HeureDeb { get; set; }
        [Required]
        public DateTime HeureFin { get; set; }
        [Required]
        public int NumPersonne { get; set; }
        [Required]
        public int NombrePlace { get; set; }

      
    }


   


}
