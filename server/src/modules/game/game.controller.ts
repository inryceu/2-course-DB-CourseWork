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
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.gameService.findAll(skipNum, takeNum);
  }

  @Get('title/:title')
  findByTitle(@Param('title') title: string) {
    return this.gameService.findByTitle(title);
  }

  @Post(':id/tags/:tagId')
  @HttpCode(HttpStatus.CREATED)
  addTagToGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.gameService.addTagToGame(id, tagId);
  }

  @Delete(':id/tags/:tagId')
  @HttpCode(HttpStatus.OK)
  removeTagFromGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.gameService.removeTagFromGame(id, tagId);
  }

  @Get(':id/tags')
  getGameTags(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.getGameTags(id);
  }

  @Post(':id/developers/:devId')
  @HttpCode(HttpStatus.CREATED)
  addDeveloperToGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('devId', ParseIntPipe) devId: number,
  ) {
    return this.gameService.addDeveloperToGame(id, devId);
  }

  @Delete(':id/developers/:devId')
  @HttpCode(HttpStatus.OK)
  removeDeveloperFromGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('devId', ParseIntPipe) devId: number,
  ) {
    return this.gameService.removeDeveloperFromGame(id, devId);
  }

  @Get(':id/developers')
  getGameDevelopers(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.getGameDevelopers(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.remove(id);
  }
}
