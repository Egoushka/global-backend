/* eslint-disable prettier/prettier */
import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Platform } from 'src/platforms/entities/platform.entity';
import { UpdatePlatformInput } from 'src/platforms/dto/inputs/update-platform.input';
import { CreatePlatformInput } from 'src/platforms/dto/inputs/create-platform.input.dto';
import { PlatformDto } from '../dto/platform.dto';
import { DeletePlatformInput } from '../dto/inputs/delete-platform.input.dto';
import { GetPlatformInput } from '../dto/inputs/get-platform.input.dto';

@Injectable()
@EntityRepository(Platform)
export class PlatformRepository extends Repository<Platform> {
  public async getAll(): Promise<Platform[]> {
    return await this.find();
  }

  public async getById(platformId: number): Promise<Platform> {
    return await this.findOne(platformId);
  }

  public async getSome(getDao: GetPlatformInput): Promise<PlatformDto[]> {
    let platforms = await this.getAll();
    if (getDao) {
      if (getDao.id != null) {
        platforms = platforms.filter(item => item.id == getDao.id);
      }
      if (getDao.name != null) {
        platforms = platforms.filter(item => item.name == getDao.name);
      }
    }
    return platforms;
  }

  public async add(createDto: CreatePlatformInput): Promise<PlatformDto> {
    const { name } = createDto;
    const platform = new Platform();
    platform.name = name;

    await this.save(platform);
    return platform;
  }

  public async edit(updateDto: UpdatePlatformInput,): Promise<PlatformDto> {
    const { name } = updateDto;
    const platform = await this.findOneOrFail(updateDto.id);

    if (!platform.id) {
      console.error("Entity isn`t present")
      return null;
    }

    platform.name = name;

    await this.save(platform);

    return platform;
  }

  public async destroy(deleteDto: DeletePlatformInput): Promise<string> {
    const platform = await this.findOneOrFail(deleteDto.id);

    if (!platform.id) {
      console.error("Entity isn`t present")
      return null;
    }

    await this.remove(platform);

    return "Destroyed";
  }
}
