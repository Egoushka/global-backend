import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PlatformDto } from '../dto/platform.dto';

@Entity()
@ObjectType()
export class Platform {
  @PrimaryGeneratedColumn()
  @Field({ description: 'Platform id' })
  id: number;
  @Column()
  @Field({ description: 'Platform name' })
  name: string;
  
  public fromEntityToDto(): PlatformDto {
    return new PlatformDto(this.id, this.name);
  }
}
