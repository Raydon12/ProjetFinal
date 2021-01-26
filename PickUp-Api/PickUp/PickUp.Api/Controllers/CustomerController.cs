using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PickUp.Api.Infrastructure.Attributes;
using PickUp.Api.Infrastructure.Security;
using PickUp.Api.Models;
using PickUp.Dal;
using PickUp.Dal.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Mypolicy")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerServices<Customer> customerServices;
        private readonly ItokenServices  tokenService;

        public CustomerController(ItokenServices itokenServices,ICustomerServices<Customer> iCustomerServices)
        {
            tokenService = itokenServices;
            customerServices = iCustomerServices;
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult GetCheck([FromBody] LoginForm form)
        {
            if (ModelState.IsValid)
            {
                Customer customer = customerServices.Login(form.Email, form.Password);

                if (customer is null)
                {
                    return NotFound();
                }
                ApiCustomer apiCustomer = new ApiCustomer(customer);
                

               apiCustomer.Token = tokenService.GenerateToken(customer);

                return Ok(apiCustomer);
            }

            return BadRequest();
        }
        [HttpPost]
        [Route("Register")]

        public IActionResult Register([FromBody] RegisterForm form)
        {
            if (ModelState.IsValid)
            {
                customerServices.Register(new Customer(form.LastName, form.FirstName, long.Parse(form.PhoneNumber), form.Email, form.Password, form.Image,form.PushNotificationsToken));
                return Ok();
            }

            return BadRequest();

        }
        [AuthRequired]
        [HttpPut]
        [Route("UpdateCustomer")]

        public IActionResult updateUserImage(Customer customer)
        {
            try
            {
                return Ok(customerServices.Update(customer));

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
