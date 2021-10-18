import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlatformRepository } from 'src/platforms/repositories/platform.repository';
import { CreatePlatformInput } from './dto/inputs/create-platform.input.dto';
import { DeletePlatformInput } from './dto/inputs/delete-platform.input.dto';
import { GetPlatformInput } from './dto/inputs/get-platform.input.dto';
import { UpdatePlatformInput } from './dto/inputs/update-platform.input';
import { PlatformDto } from './dto/platform.dto';
import { Platform } from './entities/platform.entity';

@Injectable()
export class PlatformsService {
  private readonly platforms: Platform[] = [];

  constructor(
    @InjectRepository(PlatformRepository)
    private platformRepository: PlatformRepository,
  ) {}

  async create(createPlatformInput: CreatePlatformInput): Promise<PlatformDto> {
    return await this.platformRepository.add(createPlatformInput);
  }
  async read(readDao: GetPlatformInput = null): Promise<PlatformDto[]> {
    return await this.platformRepository.getSome(readDao);
  }
  async update(updateDao: UpdatePlatformInput): Promise<PlatformDto> {
    return await this.platformRepository.edit(updateDao);
  }
  async delete(deleteDao: DeletePlatformInput): Promise<string> {
    return await this.platformRepository.destroy(deleteDao);
  }
}
