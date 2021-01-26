using AdoLibrary;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using PickUp.Api.Infrastructure.Security;
using PickUp.Dal;
using PickUp.Dal.Interfaces;
using PickUp.Dal.Models;
using PickUp.Dal.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PickUp.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("Mypolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
            services.AddControllers();
            // Verifier la légitimité du singleton ici par rapport a un transient ( test sur plus grosse db et plus d'user nécessaire)
            services.AddSingleton<IConnection, Connection>(sp => new Connection("Data Source=LAPTOP-M111B0FF;Initial Catalog=PU;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"));
            services.AddSingleton<ICustomerServices<Customer>, CustomerServices>();
            services.AddSingleton<IUserServices<User>, UserServices>();
            services.AddSingleton<ICategoryServices<Category>, CategoryServices>();
            services.AddSingleton<IEventServices<Event>, EventServices>();
            services.AddSingleton<IReservationsServices<ReservationsCustomer,ReservationUser>,ReservationsServices>();
            services.AddSingleton<ItokenServices, Token>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PickUp.Api", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PickUp.Api v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("Mypolicy");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
