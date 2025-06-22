import { AppError } from "../err/AppError";
import UserRepository from "../repositories/UserRepository";
import { v4 as uuid } from "uuid";
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ email, name, admin = false }: IUserRequest) {
    const userWithSomeEmail = await UserRepository.findOne({
      where: { email },
    });
    
    if (userWithSomeEmail) {
      throw new AppError("Usuário já existe", 409);
    }
    if(!email && !name){
      throw new AppError("Precisa preencher os campos email e nome",409)
    }
    const user = await UserRepository.create({
      id: uuid(),
      email,
      name,
      admin,
    });
    const userCreate = await UserRepository.insert(user);
    return user;
  }
}
