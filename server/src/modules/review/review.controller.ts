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
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new review',
    description: 'Creates a new review for a game by a user',
  })
  @ApiBody({ type: CreateReviewDto })
  @ApiResponse({
    status: 201,
    description: 'Review successfully created',
  })
  @ApiResponse({
    status: 404,
    description: 'User or game not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Review for this user and game already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all reviews',
    description: 'Retrieves a list of all reviews with optional pagination',
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
    description: 'List of reviews retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.reviewService.findAll(skipNum, takeNum);
  }

  @Get('user/:userId')
  @ApiOperation({
    summary: 'Get reviews by user',
    description: 'Retrieves all reviews written by a specific user',
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
    description: 'List of user reviews retrieved successfully',
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
    return this.reviewService.findByUser(userId, skipNum, takeNum);
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary: 'Get reviews for game',
    description: 'Retrieves all reviews for a specific game',
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
    description: 'List of game reviews retrieved successfully',
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
    return this.reviewService.findByGame(gameId, skipNum, takeNum);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get review by ID',
    description: 'Retrieves a specific review by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Review ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Review found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Review with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update review',
    description: 'Updates review information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Review ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateReviewDto })
  @ApiResponse({
    status: 200,
    description: 'Review successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Review with this ID not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete review',
    description: 'Permanently deletes a review',
  })
  @ApiParam({
    name: 'id',
    description: 'Review ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Review successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Review with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.remove(id);
  }
}
