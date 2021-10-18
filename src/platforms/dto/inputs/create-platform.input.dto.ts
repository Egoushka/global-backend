import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlatformInput {
  @Field(() => String, { description: 'name of platform' })
  name: string;
}
