import { Router } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { CreateUserController } from "../controllers/CreateUsersController";

const userRouter = Router();

userRouter.post("/users", async (request, response) => {
  try {
    const sut = new CreateUserService();
    const controller = new CreateUserController(sut);
    const user = await controller.handle(request, response);
    response.status(200).send(user);
  } catch (err) {
    throw err;
  }
});


export default userRouter
