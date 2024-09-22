import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { PasswordService } from './password.service';

@Resolver()
export class PasswordResolver {
  constructor(private passwordService: PasswordService) {}

  @Mutation(() => String)
  async resetPassword(
    @Args('email') email: string,
    @Args('newPassword') newPassword: string,
  ): Promise<string> {
    return this.passwordService.resetPassword(email, newPassword);
  }
}
