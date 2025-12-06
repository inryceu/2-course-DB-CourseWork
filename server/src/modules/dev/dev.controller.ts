import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { DevService } from './dev.service';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';

@Controller('devs')
export class DevController {
  constructor(private readonly devService: DevService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDevDto: CreateDevDto) {
    return this.devService.create(createDevDto);
  }

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.devService.findAll(skipNum, takeNum);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.devService.findOne(id);
  }

  @Get('name/:devName')
  findByName(@Param('devName') devName: string) {
    return this.devService.findByName(devName);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDevDto: UpdateDevDto,
  ) {
    return this.devService.update(id, updateDevDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.devService.remove(id);
  }
}

