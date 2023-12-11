# LoginAuthTeste
<h3>Configurado banco de dados sqlite</h3>

Para essa configuração em AppDbContext chamamos o construtor da classe que estamos herdando (DbContext), essa configuração sera ultilizada pelo EFCORE na hora de adicionar a configuração da base de dados como a string de  conexão e o tipo de banco na classe Program.cs.



builder.Services.AddDbContext<AppDbContext>(options =>
{
  options.UseSqlite(builder.Configuration.GetConnectionString("Default"));
});

para ultilizar basta iniciarmos um serviço na classe Program.cs e definir o nome da string de conexão que esta no aquivo appsetings.json  por exemplo:

 
 "ConnectionStrings": {

  "Default": "Data Source=UsersASC.db;Cache=Shared;"
}

<h3>Gerenciando o esquema do banco de dados ultilizando o recurso migrations do EntityFrameworkCore</h3>

Na classe AppDbContext  definimos a representação da nossa tabela chamada Users em:
public DbSet<Users> Users { get; set; } nela defnimos algumas propriedades como : Id como chave primária, Nome como chave primária ,Username como requerido do tipo varchar(45) e Password como requerido e do tipo varcha(45).
para gerar o esquema do banco de dados basta acessar o diretório do servidor adicionarmos o seguinte comando no .Net Core CLI = "dotnet ef migrations add InitialCreate" 


