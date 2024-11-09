import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateTeaDto {
  @Field()
  cName: string;

  @Field()
  idType: string;

  @Field(() => Int)
  minBrewTime: number;

  @Field(() => Int, { nullable: true })
  maxBrewTime?: number;

  @Field(() => Int, { nullable: true })
  brewingTemperature?: number;

  @Field(() => Int, { nullable: true })
  numbersOfBrews?: number;

  @Field(() => [Int], { nullable: true })
  brewingTime?: Record<number, number>; // Массив для времени пролива

  @Field()
  description: string;
}
