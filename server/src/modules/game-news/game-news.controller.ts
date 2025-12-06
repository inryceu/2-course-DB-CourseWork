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
import { GameNewsService } from './game-news.service';
import { CreateGameNewsDto } from './dto/create-game-news.dto';
import { UpdateGameNewsDto } from './dto/update-game-news.dto';

@Controller('game-news')
export class GameNewsController {
  constructor(private readonly gameNewsService: GameNewsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createGameNewsDto: CreateGameNewsDto) {
    return this.gameNewsService.create(createGameNewsDto);
  }

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.gameNewsService.findAll(skipNum, takeNum);
  }

  @Get('game/:gameId')
  findByGame(
    @Param('gameId', ParseIntPipe) gameId: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.gameNewsService.findByGame(gameId, skipNum, takeNum);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gameNewsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameNewsDto: UpdateGameNewsDto,
  ) {
    return this.gameNewsService.update(id, updateGameNewsDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gameNewsService.remove(id);
  }
}

