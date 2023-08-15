import { User } from "../entities/user.entity";

export const rolesProviders = [
    {
      provide: 'USERS_REPOSITORY',
      useValue: User,
    },
];