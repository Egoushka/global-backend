import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlatformsService } from './platforms.service';
import { Platform } from './entities/platform.entity';
import { CreatePlatformInput } from './dto/inputs/create-platform.input.dto';
import { UpdatePlatformInput } from './dto/inputs/update-platform.input';
import { PlatformDto } from './dto/platform.dto';
import { DeletePlatformInput } from './dto/inputs/delete-platform.input.dto';
import { GetPlatformInput } from './dto/inputs/get-platform.input.dto';

@Resolver(() => Platform)
export class PlatformsResolver {
  constructor(private readonly platformsService: PlatformsService) {}

  @Mutation(() => Platform)
  createPlatform(
    @Args('createPlatformInput') createPlatformInput: CreatePlatformInput,
  ) {
    return this.platformsService.create(createPlatformInput);
  }

  @Query(() => [PlatformDto], { name: 'getAll' })
  getAll() {
    return this.platformsService.read();
  }

  @Query(() => [PlatformDto], { name: 'getSome' })
  getSome(@Args('getPlatformInput') getDao: GetPlatformInput) {
    return this.platformsService.read(getDao);
  }

  @Mutation(() => PlatformDto)
  updatePlatform(@Args('updatePlatformInput') updateDao: UpdatePlatformInput) {
    return this.platformsService.update(updateDao);
  }

  @Mutation(() => String)
  removePlatform(@Args('deletePlatformInput') deleteDao: DeletePlatformInput) {
    return this.platformsService.delete(deleteDao);
  }
}
