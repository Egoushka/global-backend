import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsResolver } from './platforms.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformRepository } from 'src/platforms/repositories/platform.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlatformRepository])],
  providers: [PlatformsResolver, PlatformsService],
})
export class PlatformsModule {}
