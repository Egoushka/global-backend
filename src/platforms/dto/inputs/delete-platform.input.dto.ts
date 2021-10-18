import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeletePlatformInput {
  @Field(() => Int, {
    description: 'id of platform to find',
    nullable: true,
  })
  id: number;
  @Field(() => String, {
    description: 'name of platform to find',
    nullable: true,
  })
  name: string;
}
