import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { ComplexQueriesService } from './complex-queries.service';
import { CreateCompleteGameDto } from './dto/create-complete-game.dto';
import { CreateUserWithInitialSetupDto } from './dto/create-user-with-initial-setup.dto';

@ApiTags('Complex Queries')
@Controller('complex-queries')
export class ComplexQueriesController {
  constructor(
    private readonly complexQueriesService: ComplexQueriesService,
  ) {}

  @Post('complete-game')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create complete game setup',
    description:
      'Creates a game with tags, developers, achievements, and initial news in a single transaction. All operations are atomic - if any step fails, the entire operation is rolled back.',
  })
  @ApiBody({ type: CreateCompleteGameDto })
  @ApiResponse({
    status: 201,
    description: 'Game and all related entities successfully created',
    schema: {
      example: {
        id: 1,
        title: 'The Witcher 3',
        price: 29.99,
        achievements: [
          {
            id: 1,
            game_id: 1,
            title: 'First Steps',
            icon: 'https://example.com/icon.png',
          },
        ],
        game_tag_connection: [
          {
            game_id: 1,
            tag_id: 1,
            tags: {
              id: 1,
              tag_name: 'RPG',
            },
          },
        ],
        game_dev_connection: [
          {
            game_id: 1,
            dev_id: 1,
            devs: {
              id: 1,
              dev_name: 'CD Projekt Red',
            },
          },
        ],
        game_news: [
          {
            id: 1,
            game_id: 1,
            title: 'Game Launch Announcement',
            content: 'We are excited to announce...',
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Game with this title already exists',
  })
  @ApiResponse({
    status: 404,
    description: 'One or more tags, developers, or base game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error - transaction rolled back',
  })
  createCompleteGame(@Body() createCompleteGameDto: CreateCompleteGameDto) {
    return this.complexQueriesService.createCompleteGame(
      createCompleteGameDto,
    );
  }

  @Post('user-with-initial-setup')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create user with initial setup',
    description:
      'Creates a user with initial library entries, friend connections, and achievement unlocks in a single transaction. All operations are atomic - if any step fails, the entire operation is rolled back.',
  })
  @ApiBody({ type: CreateUserWithInitialSetupDto })
  @ApiResponse({
    status: 201,
    description: 'User and all related entities successfully created',
    schema: {
      example: {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@example.com',
        age: 25,
        region: 'US',
        libraries: [
          {
            id: 1,
            user_id: 1,
            game_id: 1,
            ownership: 'wishlist',
            games: {
              id: 1,
              title: 'The Witcher 3',
              cover: 'https://example.com/cover.jpg',
            },
          },
        ],
        friends_friends_user_idTousers: [
          {
            user_id: 1,
            friend_id: 2,
            status: 'pending',
            users_friends_friend_idTousers: {
              id: 2,
              username: 'jane_doe',
              avatar: 'https://example.com/avatar.jpg',
            },
          },
        ],
        user_achieve_connection: [
          {
            user_id: 1,
            achievement_id: 1,
            achievements: {
              id: 1,
              game_id: 1,
              title: 'First Steps',
              icon: 'https://example.com/icon.png',
              games: {
                id: 1,
                title: 'The Witcher 3',
              },
            },
          },
        ],
      },
    },
  })
  @ApiResponse({
    status: 409,
    description: 'Username or email already exists',
  })
  @ApiResponse({
    status: 404,
    description: 'One or more games, friends, or achievements not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data (age, region, etc.)',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error - transaction rolled back',
  })
  createUserWithInitialSetup(
    @Body() createUserWithInitialSetupDto: CreateUserWithInitialSetupDto,
  ) {
    return this.complexQueriesService.createUserWithInitialSetup(
      createUserWithInitialSetupDto,
    );
  }
}

