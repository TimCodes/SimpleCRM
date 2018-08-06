using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SimpleCrm.Services;

namespace SimpleCrm
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            // only need one instance of service for entire applicatoin 
            services.AddSingleton<IGreeter, Greeter>();
            // scoped create once per http request 
            services.AddScoped<IProductData, InMemoryProductData>();
            services.AddScoped<IActivityData, InMemoryActivityData>();
            services.AddScoped<IContactData, InMemoryContactData>();
            services.AddScoped<ILeadData, InMemoryLeadData>();
            services.AddScoped<IOpportunityData, InMemoryOpportunityData>();

            services.AddMvc();

            // transcient create instancce every time its needed 
            // scoped create once per http request 

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, 
                               IHostingEnvironment env,
                               IConfiguration configuration,
                               IGreeter greeter,
                               ILogger<Startup> logger
                               )
        {
            if (env.IsDevelopment())
            {
              
                app.UseDeveloperExceptionPage();
            }
            // app.UseDefaultFiles();
            // app.UseFileServer();
            app.UseStaticFiles();

            app.UseMvc(ConfigureRoutes);


            app.Run(async (context) =>
            {
               // throw new Exception("these are not the droids  your looking for ");
                //var greeting = configuration["Greeting"];
                var greeting = greeter.GetMessageOfTheDay();
             
                await context.Response.WriteAsync($"{greeting} : {env.EnvironmentName}");
            });
        }
        private void ConfigureRoutes(IRouteBuilder routeBuilder)
        {
            routeBuilder.MapRoute("Default",
                "{controller=Home}/{action=Index}/{id?}");
        }
    }
}

// app.Use(next =>
//{
//    return async context =>
//    {
//        logger.LogInformation("Request Incoming");
//        if (context.Request.Path.StartsWithSegments("/mym"))
//        {
//            await context.Response.WriteAsync("Hit mym!");
//            logger.LogInformation("Request Hanlded");

//        }
//        else
//        {
//           await  next(context);
//            logger.LogInformation("Reespone Hanlded");

//        }


//    };
//});