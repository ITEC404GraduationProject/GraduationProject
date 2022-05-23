using System.Text;
using GraduationProject;
using GraduationProject.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<DatabaseSettings>(
    builder.Configuration.GetSection(nameof(DatabaseSettings)));

builder.Services.AddSingleton<IDatabaseSettings>(sp =>
    sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);

builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("This is super secret key for jwt")),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddSingleton<IMongoClient>(sp => 
    new MongoClient(builder.Configuration.GetValue<string>("MongoConnection:ConnectionString")));


builder.Services.AddScoped<IStudentServices, StudentServices>();
builder.Services.AddScoped<IOfferServices, OfferServices>();
builder.Services.AddScoped<IHousingTypeServices, HousingTypeServices>();
builder.Services.AddScoped<IFurnitureServices, FurnitureServices>();
builder.Services.AddScoped<IPriceServices, PriceServices>();


var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        builder =>
        {
            builder.AllowCredentials();
            builder.WithOrigins("https://localhost:44413", "http://localhost:44413");
            builder.WithHeaders("Content-Type", "Authorization");
            builder.WithMethods("GET", "POST", "PUT", "DELETE");
        });
});



builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
