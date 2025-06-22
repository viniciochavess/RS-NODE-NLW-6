import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  constructor(private sut: CreateUserService) {}
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;
    const user = await this.sut.execute({ email, name, admin });
    return user;
  }
}
