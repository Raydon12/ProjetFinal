using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class DeleteReservation
    {
        public int customerId { get; set; }
        public int reservationId { get; set; }

        public DeleteReservation(int customerId, int reservationId)
        {
            this.customerId = customerId;
            this.reservationId = reservationId;
        }
    }
}
