

namespace ApiAuth0.Server.Controllers
{
 
    using global::ApiAuth0.Server.Data;
    using global::ApiAuth0.Server.Models;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Data.Sqlite;
    using Microsoft.EntityFrameworkCore;


    namespace ApiAuth0.Server.Controllers
    {
      
        [ApiController]
        [Route("[controller]")]


        public class WeatherForecastController : ControllerBase
        {

            private readonly AppDbContext _context;

            public WeatherForecastController(AppDbContext context)
            {
                _context = context;
            }

            [HttpPost("login")]

            public async Task<IActionResult> Logar( string username,  string password)
            {

                SqliteConnection sqLiteConnection = new SqliteConnection("DataSource=UsersASC.db;Cache=Shared;");

                await sqLiteConnection.OpenAsync();

                SqliteCommand sqliteCommand = sqLiteConnection.CreateCommand();

                sqliteCommand.CommandText = $"SELECT * FROM Users WHERE Username ='{username}'AND Password = '{password}'";

                SqliteDataReader reader = sqliteCommand.ExecuteReader();
                //implementar cadastro no client  para obsrvar essa issue

                if (await reader.ReadAsync())
                {
                    return Ok(new { Msg = "logado" });
                }
                     return Ok(new { Msg = "verifique suas credenciais" });
            }

            [HttpGet]
            public async Task<IActionResult> Teste()
            {
                return Ok(new { msg = "teste" });
            }

            [HttpPost("cadastrar")]
            public async Task<IActionResult> Cadastrar([FromQuery]Users input)
            {
              
           
                _context.Users.Add(input);

                _context.SaveChanges();
                return Ok(new { Name=input.Name ,Username = input.Username, Password = input.Password  } );
            }

           
        }
   

    }
    }



