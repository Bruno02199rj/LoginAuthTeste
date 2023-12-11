# LoginAuthTeste
<div><img width="40" height="40" src="https://img.icons8.com/color/48/net-framework.png" alt="net-framework"/> <img width="40" height="40" src="https://img.icons8.com/?size=256&id=Fycm8TUhWmFU&format=png" alt="C SHARP"/> <img width="40" height="40" src="https://img.icons8.com/?size=256&id=ezj3zaVtImPg&format=png" alt="VSCODE COMUNITY"/></div>
<h3>Configurado banco de dados sqlite</h3>

Para essa configuração em AppDbContext chamamos o construtor da classe que estamos herdando (DbContext), essa configuração sera ultilizada pelo EFCORE na hora de adicionar a configuração na classe Program.cs.

uma string de conexão no aquivo appsettings.json por exemplo "Data Source=c:\mydb.db;Cache=Shared;Version=3;"
para ultilizar basta iniciarmos um serviço na classe  e definirmos o nome da string de conexão que esta no aquivo citado anteriormente por exemplo:

builder.Services.AddDbContext<AppDbContext>(options =>
{
  options.UseSqlite(builder.Configuration.GetConnectionString("Default"));
});

<h3>Gerenciando o esquema do banco de dados ultilizando o recurso migrations do EntityFrameworkCore</h3>

Na classe AppDbContext  definimos a representação da nossa tabela chamada Users em:
public DbSet<Users> Users { get; set; } nela defnimos algumas propriedades como : Id como chave primária, Nome como chave primária ,Username como requerido do tipo varchar(45) e Password como requerido e do tipo varcha(45).
para gera o esquem do banco de dados basta acessar o diretório do servidor adicionarmos o seguinte comando no .Net Core CLI = "dotnet ef migrations add InitialCreate" 


