using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PickUp.Api.Infrastructure.Security;
using PickUp.Api.Models;
using PickUp.Dal.Interfaces;
using PickUp.Dal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Mypolicy")]
    public class UserController : ControllerBase
    {
        private readonly IUserServices<User> iUserServices;
        private readonly ItokenServices tokenServices;
       
        public UserController(IUserServices<User> userServices,ItokenServices token)
        {
            iUserServices = userServices;
            tokenServices = token;

        }

        [HttpGet]

        public IActionResult GetAll()
        {
            try
            {
                return Ok(iUserServices.GetAll());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]

        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(iUserServices.GetById(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("Category/{id}")]

        public IActionResult GetByCategoryId(int id)
        {
            try
            {
                return Ok(iUserServices.GetByCategoryId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("ProEvent")]
        public IActionResult GetAllRestoNow()
        {
            try
            {
                return Ok(iUserServices.GetAllProNow());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult GetCheck([FromBody] LoginForm form)
        {
            if (ModelState.IsValid)
            {
                User user = iUserServices.Login(form.Email, form.Password);

                if (user is null)
                {
                    return NotFound();
                }
                ApiUser apiUser = new ApiUser(user);


                apiUser.Token = tokenServices.GenerateTokenUser(user);

                return Ok(apiUser);
            }

            return BadRequest();
        }
        [HttpPost]
        [Route("Register")]

        public IActionResult Register([FromBody] RegisterUserForm form)
        {
            if (ModelState.IsValid)
            {
                iUserServices.Register(new User(form.Name, form.Email, form.Password, form.Description, form.AdressStreet, form.AdressNum, form.AdressCity, form.AdresseZip, form.PhoneNumber, form.Logo, form.Latitude, form.Longitude));
                return Ok();
            }

            return BadRequest();

        }
    }
}
