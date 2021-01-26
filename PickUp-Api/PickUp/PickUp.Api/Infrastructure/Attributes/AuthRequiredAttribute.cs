using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using PickUp.Api.Infrastructure.Security;
using PickUp.Api.Models;

namespace PickUp.Api.Infrastructure.Attributes
{
    [AttributeUsage(AttributeTargets.Class| AttributeTargets.Method)]
    public class AuthRequiredAttribute : TypeFilterAttribute
    {
        public AuthRequiredAttribute() : base(typeof(AuthRequiredFilter))
        {

        }
        private class AuthRequiredFilter : IAuthorizationFilter
        {
            public void OnAuthorization(AuthorizationFilterContext context)
            {
                ItokenServices tokenService = (ItokenServices)context.HttpContext.RequestServices.GetService(typeof(ItokenServices));

                context.HttpContext.Request.Headers.TryGetValue("Authorization", out StringValues authorizations);
                string token = authorizations.SingleOrDefault(authorizations => authorizations.StartsWith("Bearer"));

                if(token is null)
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }

                ApiCustomer customer = tokenService.ValidateToken(token);

                if(customer is null)
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }
                context.RouteData.Values.Add("CustomerId", customer.CustomerId);
            }
        }
    }
}
