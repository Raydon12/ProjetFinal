using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Models
{
    public class RegisterForm
    {
        [Required]

        public string LastName { get; set; }
        [Required]

        public string FirstName { get; set; }
        [Required]

        public string Email { get; set; }

        [Required]
        [MaxLength(320)]
        public string PhoneNumber { get; set; }

        [Required]
        [MaxLength(20)]
        public string Password { get; set; }

        public string Image { get; set; }
        public string PushNotificationsToken { get; set; }
    }
}
