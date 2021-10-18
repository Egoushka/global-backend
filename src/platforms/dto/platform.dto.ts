import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PlatformDto {
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  @Field({ description: 'Platform id' })
  id: number;
  @Field({ description: 'Platform name' })
  name: string;
}
