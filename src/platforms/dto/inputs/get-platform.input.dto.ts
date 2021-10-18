import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class GetPlatformInput {
  @Field(() => ID, { description: 'id of platform', nullable: true })
  id: number;
  @Field(() => String, { description: 'name of platform', nullable: true })
  name: string;
}
