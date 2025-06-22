import express from "express";
import "express-async-errors";
import { CreateUserService } from "./services/CreateUserService";
import { AppErrorMiddleware } from "./middleware/AppError";
import { CreateUserController } from "./controllers/CreateUsersController";
import userRouter from "./routes/userRoutes";

const app = express();

app.use(express.json());

app.use(userRouter)

app.use(AppErrorMiddleware);

export default app;
