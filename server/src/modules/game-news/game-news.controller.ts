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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { GameNewsService } from './game-news.service';
import { CreateGameNewsDto } from './dto/create-game-news.dto';
import { UpdateGameNewsDto } from './dto/update-game-news.dto';

@ApiTags('Game News')
@Controller('game-news')
export class GameNewsController {
  constructor(private readonly gameNewsService: GameNewsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new game news article',
    description: 'Creates a new news article for a game',
  })
  @ApiBody({ type: CreateGameNewsDto })
  @ApiResponse({
    status: 201,
    description: 'News article successfully created',
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createGameNewsDto: CreateGameNewsDto) {
    return this.gameNewsService.create(createGameNewsDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all game news',
    description:
      'Retrieves a list of all game news articles with optional pagination',
  })
  @ApiQuery({
    name: 'skip',
    required: false,
    type: Number,
    description: 'Number of records to skip',
    example: 0,
  })
  @ApiQuery({
    name: 'take',
    required: false,
    type: Number,
    description: 'Number of records to take',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'List of news articles retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.gameNewsService.findAll(skipNum, takeNum);
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary: 'Get news by game',
    description: 'Retrieves all news articles for a specific game',
  })
  @ApiParam({
    name: 'gameId',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'skip',
    required: false,
    type: Number,
    description: 'Number of records to skip',
    example: 0,
  })
  @ApiQuery({
    name: 'take',
    required: false,
    type: Number,
    description: 'Number of records to take',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'List of game news articles retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
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
  @ApiOperation({
    summary: 'Get news article by ID',
    description: 'Retrieves a specific news article by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'News article ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'News article found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'News article with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gameNewsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update news article',
    description: 'Updates news article information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'News article ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateGameNewsDto })
  @ApiResponse({
    status: 200,
    description: 'News article successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'News article or game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameNewsDto: UpdateGameNewsDto,
  ) {
    return this.gameNewsService.update(id, updateGameNewsDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete news article',
    description: 'Permanently deletes a news article',
  })
  @ApiParam({
    name: 'id',
    description: 'News article ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'News article successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'News article with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gameNewsService.remove(id);
  }
}
