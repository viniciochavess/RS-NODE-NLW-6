import AppDataSource from "../database";
import User from "../database/entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({});

export default UserRepository;
