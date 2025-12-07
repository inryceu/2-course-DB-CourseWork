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
import { FriendService } from './friend.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';

@Controller('friends')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createFriendDto: CreateFriendDto) {
    return this.friendService.create(createFriendDto);
  }

  @Get()
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.friendService.findAll(skipNum, takeNum);
  }

  @Get('user/:userId')
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
  findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('friendId', ParseIntPipe) friendId: number,
  ) {
    return this.friendService.findOne(userId, friendId);
  }

  @Patch('user/:userId/friend/:friendId')
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('friendId', ParseIntPipe) friendId: number,
    @Body() updateFriendDto: UpdateFriendDto,
  ) {
    return this.friendService.update(userId, friendId, updateFriendDto);
  }

  @Delete('user/:userId/friend/:friendId')
  @HttpCode(HttpStatus.OK)
  remove(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('friendId', ParseIntPipe) friendId: number,
  ) {
    return this.friendService.remove(userId, friendId);
  }
}

