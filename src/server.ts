import "reflect-metadata";
import AppDataSource from "./database";
import app from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado com sucesso");

    app.listen(3333, () => {
      console.log("Servidor rodando na porta 3333");
    });
  })
  .catch((error) => {
    console.error("logError:", error);
  });
