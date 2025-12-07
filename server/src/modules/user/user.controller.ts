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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Creates a new user account with the provided information',
  })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User successfully created',
  })
  @ApiResponse({
    status: 409,
    description: 'User with this username or email already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieves a list of all users with optional pagination',
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
    description: 'List of users retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.userService.findAll(skipNum, takeNum);
  }

  @Get('username/:username')
  @ApiOperation({
    summary: 'Get user by username',
    description: 'Retrieves a user by their username',
  })
  @ApiParam({
    name: 'username',
    description: 'Username of the user',
    example: 'john_doe',
  })
  @ApiResponse({
    status: 200,
    description: 'User found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'User with this username not found',
  })
  findByUsername(@Param('username') username: string) {
    return this.userService.findByUsername(username);
  }

  @Post(':id/achievements/:achievementId')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Unlock achievement for user',
    description: 'Associates an achievement with a user (unlocks it)',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'achievementId',
    description: 'Achievement ID to unlock',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 201,
    description: 'Achievement successfully unlocked for user',
  })
  @ApiResponse({
    status: 404,
    description: 'User or achievement not found',
  })
  @ApiResponse({
    status: 409,
    description: 'User has already unlocked this achievement',
  })
  unlockAchievement(
    @Param('id', ParseIntPipe) id: number,
    @Param('achievementId', ParseIntPipe) achievementId: number,
  ) {
    return this.userService.unlockAchievement(id, achievementId);
  }

  @Delete(':id/achievements/:achievementId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Remove achievement from user',
    description: 'Removes an achievement association from a user',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'achievementId',
    description: 'Achievement ID to remove',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Achievement successfully removed from user',
  })
  @ApiResponse({
    status: 404,
    description: 'User has not unlocked this achievement',
  })
  removeAchievement(
    @Param('id', ParseIntPipe) id: number,
    @Param('achievementId', ParseIntPipe) achievementId: number,
  ) {
    return this.userService.removeAchievement(id, achievementId);
  }

  @Get(':id/achievements')
  @ApiOperation({
    summary: 'Get user achievements',
    description: 'Retrieves all achievements unlocked by a specific user',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'List of user achievements retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  getUserAchievements(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserAchievements(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get user by ID',
    description: 'Retrieves a user by their ID',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'User found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'User with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update user',
    description: 'Updates user information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'User successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'User with this ID not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Username or email already taken',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete user',
    description: 'Permanently deletes a user account',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'User with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
