import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async register(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.userService.createUser(username, email, password);
  }
}
