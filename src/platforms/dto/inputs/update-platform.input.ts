import { CreatePlatformInput } from './create-platform.input.dto';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePlatformInput extends PartialType(CreatePlatformInput) {
  @Field(() => ID, { description: 'id' })
  id: number;
  @Field(() => String, { description: 'name of platform' })
  name: string;
}
