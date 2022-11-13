import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { User } from 'src/utils/types';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private fakeUsers: User[] = [
    { id: '129fb8c7-1144-454c-aaef-d72fbb40d68a', username: 'Gui', email: 'gui@test.com' },
    { id: '13c95870-736b-4887-86a5-fbc3926dde62', username: 'Jonh Doe', email: 'jonhdoe@email.com' },
    { id: 'eebbd503-18ff-4d9f-b9a5-0180f640b76d', username: 'Mary Jane', email: 'maryjane@email.com' }
  ]

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: createUserDto): User {
    const user = {
      id: uuid(),
      username: userData.username,
      email: userData.email
    }
    this.fakeUsers.push(user);
    return user;
  }

  fetchUserById(id: string) {
    return this.fakeUsers.find(user => user.id === id);
  }
}
