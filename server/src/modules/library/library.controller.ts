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
import { LibraryService } from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';

@ApiTags('Libraries')
@Controller('libraries')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Add game to user library',
    description:
      'Adds a game to a user library with ownership type and optional download status',
  })
  @ApiBody({ type: CreateLibraryDto })
  @ApiResponse({
    status: 201,
    description: 'Game successfully added to user library',
  })
  @ApiResponse({
    status: 404,
    description: 'User or game not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Library entry for this user and game already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createLibraryDto: CreateLibraryDto) {
    return this.libraryService.create(createLibraryDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all library entries',
    description:
      'Retrieves a list of all library entries with optional pagination',
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
    description: 'List of library entries retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.libraryService.findAll(skipNum, takeNum);
  }

  @Get('user/:userId')
  @ApiOperation({
    summary: 'Get user library',
    description: 'Retrieves all games in a specific user library',
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
    description: 'User library retrieved successfully',
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
    return this.libraryService.findByUser(userId, skipNum, takeNum);
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary: 'Get game owners',
    description: 'Retrieves all users who own a specific game',
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
    description: 'List of game owners retrieved successfully',
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
    return this.libraryService.findByGame(gameId, skipNum, takeNum);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get library entry by ID',
    description: 'Retrieves a specific library entry by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Library entry ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Library entry found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Library entry with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.libraryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update library entry',
    description: 'Updates library entry information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Library entry ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateLibraryDto })
  @ApiResponse({
    status: 200,
    description: 'Library entry successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Library entry with this ID not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLibraryDto: UpdateLibraryDto,
  ) {
    return this.libraryService.update(id, updateLibraryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete library entry',
    description: 'Permanently removes a game from user library',
  })
  @ApiParam({
    name: 'id',
    description: 'Library entry ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Library entry successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Library entry with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.libraryService.remove(id);
  }
}
