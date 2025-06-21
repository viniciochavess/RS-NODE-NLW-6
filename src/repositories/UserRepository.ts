import AppDataSource from "../database";
import User from "../database/entities/User";

export const userRepository = AppDataSource.getRepository(User).extend({});
