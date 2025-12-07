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
import { AchievementService } from './achievement.service';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';

@ApiTags('Achievements')
@Controller('achievements')
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new achievement',
    description: 'Creates a new achievement for a game',
  })
  @ApiBody({ type: CreateAchievementDto })
  @ApiResponse({
    status: 201,
    description: 'Achievement successfully created',
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createAchievementDto: CreateAchievementDto) {
    return this.achievementService.create(createAchievementDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all achievements',
    description:
      'Retrieves a list of all achievements with optional pagination',
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
    description: 'List of achievements retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.achievementService.findAll(skipNum, takeNum);
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary: 'Get achievements by game',
    description: 'Retrieves all achievements for a specific game',
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
    description: 'List of game achievements retrieved successfully',
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
    return this.achievementService.findByGame(gameId, skipNum, takeNum);
  }

  @Get(':id/unlockers')
  @ApiOperation({
    summary: 'Get achievement unlockers',
    description: 'Retrieves all users who have unlocked a specific achievement',
  })
  @ApiParam({
    name: 'id',
    description: 'Achievement ID',
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
    description:
      'List of users who unlocked this achievement retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Achievement not found',
  })
  getAchievementUnlockers(
    @Param('id', ParseIntPipe) id: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.achievementService.getAchievementUnlockers(
      id,
      skipNum,
      takeNum,
    );
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get achievement by ID',
    description: 'Retrieves a specific achievement by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Achievement ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Achievement found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Achievement with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.achievementService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update achievement',
    description: 'Updates achievement information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Achievement ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateAchievementDto })
  @ApiResponse({
    status: 200,
    description: 'Achievement successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Achievement or game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAchievementDto: UpdateAchievementDto,
  ) {
    return this.achievementService.update(id, updateAchievementDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete achievement',
    description: 'Permanently deletes an achievement',
  })
  @ApiParam({
    name: 'id',
    description: 'Achievement ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Achievement successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Achievement with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.achievementService.remove(id);
  }
}
