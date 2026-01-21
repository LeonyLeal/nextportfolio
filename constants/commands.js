export const rodapeComandos = [

  "node index.js",
  "npm install",
  "npm run build",
  "npm test",
  "npx eslint .",
  
  "docker-compose up -d",
  "docker ps -a",
  "docker logs <container>",
  "docker exec -it <container> /bin/bash",
  "docker build -t meu-app .",
  
  "mvn clean install",
  "mvn package",
  "./mvnw clean install",
  "gradle build",
  "gradle clean build",
  "./gradlew build",
  
  "git status",
  "git add .",
  "git commit -m 'feat: update'",
  "git push origin main",
  "git pull",
  
  "dotnet build",
  "dotnet run",
  "dotnet test",
  "dotnet ef migrations add MinhaMigration",
  "dotnet ef database update",
  
  "SELECT * FROM Usuarios;",
  "UPDATE Produtos SET preco = preco * 1.1;",
  "DELETE FROM Logs WHERE data < '2026-01-01';",
  "INSERT INTO Pedidos (id, total) VALUES (1, 100.0);",
  "CREATE TABLE Teste (id INT PRIMARY KEY, nome VARCHAR(50));",
  
  "chmod +x script.sh",
  "./script.sh"
];

export default rodapeComandos;