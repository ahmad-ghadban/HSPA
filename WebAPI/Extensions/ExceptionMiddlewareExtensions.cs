﻿using Microsoft.AspNetCore.Diagnostics;
using System.Net;
using WebAPI.Middlewares;

namespace WebAPI.Extensions
{
    public static class ExceptionMiddlewareExtensions
    {

        public static void ConfigureExceptiionHandler(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseMiddleware<ExceptionMiddleware>();  
        }


        public static void ConfigureBuiltinExceptiionHandler(this IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(
                    options =>
                    {
                        options.Run(
                            async context =>
                            {
                                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                                var ex = context.Features.Get<IExceptionHandlerFeature>();
                                if (ex != null)
                                {
                                    await context.Response.WriteAsync(ex.Error.Message);
                                }
                            }
                        );
                    }
                );
            }
        }
    }
}
