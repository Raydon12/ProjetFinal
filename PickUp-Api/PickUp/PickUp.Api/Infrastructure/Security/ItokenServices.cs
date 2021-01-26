using PickUp.Api.Models;
using PickUp.Dal;
using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Infrastructure.Security
{
   public interface ItokenServices
    {
        string GenerateToken(Customer customer);
        string GenerateTokenUser(User user);
        ApiCustomer ValidateToken(string token);
        ApiUser ValidateTokenUser(string token);
    }
}
