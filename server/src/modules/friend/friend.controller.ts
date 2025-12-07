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
import { FriendService } from './friend.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';

@ApiTags('Friends')
@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create friendship relationship',
    description: 'Creates a friendship relationship between two users',
  })
  @ApiBody({ type: CreateFriendDto })
  @ApiResponse({
    status: 201,
    description: 'Friendship relationship successfully created',
  })
  @ApiResponse({
    status: 404,
    description: 'User or friend not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Friendship relationship already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'User cannot add themselves as a friend',
  })
  create(@Body() createFriendDto: CreateFriendDto) {
    return this.friendService.create(createFriendDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all friendships',
    description:
      'Retrieves a list of all friendship relationships with optional pagination',
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
    description: 'List of friendships retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.friendService.findAll(skipNum, takeNum);
  }

  @Get('user/:userId')
  @ApiOperation({
    summary: 'Get user friends',
    description: 'Retrieves all friends of a specific user',
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
    description: 'List of user friends retrieved successfully',
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
    return this.friendService.findByUser(userId, skipNum, takeNum);
  }

  @Get('friend/:friendId')
  @ApiOperation({
    summary: 'Get users who have this user as friend',
    description:
      'Retrieves all users who have added the specified user as a friend',
  })
  @ApiParam({
    name: 'friendId',
    description: 'Friend ID',
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
    description: 'List of users retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Friend not found',
  })
  findByFriend(
    @Param('friendId', ParseIntPipe) friendId: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.friendService.findByFriend(friendId, skipNum, takeNum);
  }

  @Get('user/:userId/friend/:friendId')
  @ApiOperation({
    summary: 'Get friendship by user IDs',
    description:
      'Retrieves a specific friendship relationship between two users',
  })
  @ApiParam({
    name: 'userId',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'friendId',
    description: 'Friend ID',
    type: Number,
    example: 2,
  })
  @ApiResponse({
    status: 200,
    description: 'Friendship relationship found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Friendship relationship not found',
  })
  findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('friendId', ParseIntPipe) friendId: number,
  ) {
    return this.friendService.findOne(userId, friendId);
  }

  @Patch('user/:userId/friend/:friendId')
  @ApiOperation({
    summary: 'Update friendship status',
    description: 'Updates the status of a friendship relationship',
  })
  @ApiParam({
    name: 'userId',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'friendId',
    description: 'Friend ID',
    type: Number,
    example: 2,
  })
  @ApiBody({ type: UpdateFriendDto })
  @ApiResponse({
    status: 200,
    description: 'Friendship status successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Friendship relationship not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('friendId', ParseIntPipe) friendId: number,
    @Body() updateFriendDto: UpdateFriendDto,
  ) {
    return this.friendService.update(userId, friendId, updateFriendDto);
  }

  @Delete('user/:userId/friend/:friendId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete friendship',
    description: 'Permanently removes a friendship relationship',
  })
  @ApiParam({
    name: 'userId',
    description: 'User ID',
    type: Number,
    example: 1,
  })
  @ApiParam({
    name: 'friendId',
    description: 'Friend ID',
    type: Number,
    example: 2,
  })
  @ApiResponse({
    status: 200,
    description: 'Friendship relationship successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Friendship relationship not found',
  })
  remove(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('friendId', ParseIntPipe) friendId: number,
  ) {
    return this.friendService.remove(userId, friendId);
  }
}
