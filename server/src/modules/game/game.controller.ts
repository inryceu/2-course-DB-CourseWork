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
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@ApiTags('Games')
@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new game',
    description: 'Creates a new game with the provided information',
  })
  @ApiBody({ type: CreateGameDto })
  @ApiResponse({
    status: 201,
    description: 'Game successfully created',
  })
  @ApiResponse({
    status: 409,
    description: 'Game with this title already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data or base game not found',
  })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all games',
    description: 'Retrieves a list of all games with optional pagination',
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
    description: 'List of games retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.gameService.findAll(skipNum, takeNum);
  }

  @Get('title/:title')
  @ApiOperation({
    summary: 'Get game by title',
    description: 'Retrieves a game by its title',
  })
  @ApiParam({
    name: 'title',
    description: 'Title of the game',
    example: 'The Witcher 3',
  })
  @ApiResponse({
    status: 200,
    description: 'Game found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Game with this title not found',
  })
  findByTitle(@Param('title') title: string) {
    return this.gameService.findByTitle(title);
  }

  @Post(':id/tags/:tagId')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Add tag to game',
    description: 'Associates a tag with a game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'tagId',
    description: 'Tag ID to add',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 201,
    description: 'Tag successfully added to game',
  })
  @ApiResponse({
    status: 404,
    description: 'Game or tag not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Tag is already associated with this game',
  })
  addTagToGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.gameService.addTagToGame(id, tagId);
  }

  @Delete(':id/tags/:tagId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Remove tag from game',
    description: 'Removes a tag association from a game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'tagId',
    description: 'Tag ID to remove',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Tag successfully removed from game',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag is not associated with this game',
  })
  removeTagFromGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.gameService.removeTagFromGame(id, tagId);
  }

  @Get(':id/tags')
  @ApiOperation({
    summary: 'Get game tags',
    description: 'Retrieves all tags associated with a specific game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'List of game tags retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  getGameTags(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.getGameTags(id);
  }

  @Post(':id/developers/:devId')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Add developer to game',
    description: 'Associates a developer/publisher with a game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'devId',
    description: 'Developer ID to add',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 201,
    description: 'Developer successfully added to game',
  })
  @ApiResponse({
    status: 404,
    description: 'Game or developer not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Developer is already associated with this game',
  })
  addDeveloperToGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('devId', ParseIntPipe) devId: number,
  ) {
    return this.gameService.addDeveloperToGame(id, devId);
  }

  @Delete(':id/developers/:devId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Remove developer from game',
    description: 'Removes a developer association from a game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'devId',
    description: 'Developer ID to remove',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Developer successfully removed from game',
  })
  @ApiResponse({
    status: 404,
    description: 'Developer is not associated with this game',
  })
  removeDeveloperFromGame(
    @Param('id', ParseIntPipe) id: number,
    @Param('devId', ParseIntPipe) devId: number,
  ) {
    return this.gameService.removeDeveloperFromGame(id, devId);
  }

  @Get(':id/developers')
  @ApiOperation({
    summary: 'Get game developers',
    description:
      'Retrieves all developers/publishers associated with a specific game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'List of game developers retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  getGameDevelopers(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.getGameDevelopers(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get game by ID',
    description: 'Retrieves a game by its ID with related data',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Game found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Game with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update game',
    description: 'Updates game information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateGameDto })
  @ApiResponse({
    status: 200,
    description: 'Game successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Game with this ID not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Game title already taken',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data or base game not found',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete game',
    description: 'Permanently deletes a game',
  })
  @ApiParam({
    name: 'id',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Game successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Game with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.remove(id);
  }
}
