import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      email: 'john@email.com',
      password: '12345',
      userId: 1,
    },
    {
      email: 'maria@email.com',
      password: '12345',
      userId: 2,
    },
  ];

  findOne(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
