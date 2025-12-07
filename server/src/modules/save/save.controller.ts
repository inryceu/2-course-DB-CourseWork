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
import { SaveService } from './save.service';
import { CreateSaveDto } from './dto/create-save.dto';
import { UpdateSaveDto } from './dto/update-save.dto';

@ApiTags('Saves')
@Controller('saves')
export class SaveController {
  constructor(private readonly saveService: SaveService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new game save',
    description: 'Creates a new save game for a user and game',
  })
  @ApiBody({ type: CreateSaveDto })
  @ApiResponse({
    status: 201,
    description: 'Game save successfully created',
  })
  @ApiResponse({
    status: 404,
    description: 'User or game not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Save for this user and game already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createSaveDto: CreateSaveDto) {
    return this.saveService.create(createSaveDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all game saves',
    description: 'Retrieves a list of all game saves with optional pagination',
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
    description: 'List of game saves retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.saveService.findAll(skipNum, takeNum);
  }

  @Get('user/:userId')
  @ApiOperation({
    summary: 'Get saves by user',
    description: 'Retrieves all game saves for a specific user',
  })
  @ApiParam({
    name: 'userId',
    description: 'User ID',
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
    description: 'List of user saves retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
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
  @ApiOperation({
    summary: 'Get saves by game',
    description: 'Retrieves all saves for a specific game',
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
    description: 'List of game saves retrieved successfully',
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
    return this.saveService.findByGame(gameId, skipNum, takeNum);
  }

  @Get('user/:userId/game/:gameId')
  @ApiOperation({
    summary: 'Get save by user and game',
    description: 'Retrieves a specific save for a user and game combination',
  })
  @ApiParam({
    name: 'userId',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'gameId',
    description: 'Game ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Save found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Save not found',
  })
  findByUserAndGame(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('gameId', ParseIntPipe) gameId: number,
  ) {
    return this.saveService.findByUserAndGame(userId, gameId);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get save by ID',
    description: 'Retrieves a specific game save by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Save ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Save found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Save with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.saveService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update game save',
    description: 'Updates save game data. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Save ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateSaveDto })
  @ApiResponse({
    status: 200,
    description: 'Game save successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Save with this ID not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSaveDto: UpdateSaveDto,
  ) {
    return this.saveService.update(id, updateSaveDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete game save',
    description: 'Permanently deletes a game save',
  })
  @ApiParam({
    name: 'id',
    description: 'Save ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Game save successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Save with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.saveService.remove(id);
  }
}
