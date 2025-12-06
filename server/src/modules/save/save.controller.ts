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
import { SaveService } from './save.service';
import { CreateSaveDto } from './dto/create-save.dto';
import { UpdateSaveDto } from './dto/update-save.dto';

@Controller('saves')
export class SaveController {
  constructor(private readonly saveService: SaveService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createSaveDto: CreateSaveDto) {
    return this.saveService.create(createSaveDto);
  }

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.saveService.findAll(skipNum, takeNum);
  }

  @Get('user/:userId')
  findByUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.saveService.findByUser(userId, skipNum, takeNum);
  }

  @Get('game/:gameId')
  findByGame(
    @Param('gameId', ParseIntPipe) gameId: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.saveService.findByGame(gameId, skipNum, takeNum);
  }

  @Get('user/:userId/game/:gameId')
  findByUserAndGame(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('gameId', ParseIntPipe) gameId: number,
  ) {
    return this.saveService.findByUserAndGame(userId, gameId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.saveService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSaveDto: UpdateSaveDto,
  ) {
    return this.saveService.update(id, updateSaveDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.saveService.remove(id);
  }
}

