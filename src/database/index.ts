import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "src/database/db.db",
  migrations: ["src/database/migrations/*.ts"],
  entities:['src/database/entities/*.ts']
});

AppDataSource.initialize()

  .then(() => {
    synchronize: true
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;

