import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBrewTimeDto {
  @Field(() => Int)
  teaId: number;

  @Field(() => Int)
  infusionNumber: number;

  @Field(() => Int)
  infusionTime: number;
}
