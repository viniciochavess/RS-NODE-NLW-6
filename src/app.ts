import "reflect-metadata"
import express from "express";
import AppDataSource from "./database";
const app = express();

app.use(express.json());

export default app;
