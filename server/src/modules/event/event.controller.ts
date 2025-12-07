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
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@ApiTags('Events')
@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new event',
    description:
      'Creates a new event (sale, giveaway, or free weekend) for a game',
  })
  @ApiBody({ type: CreateEventDto })
  @ApiResponse({
    status: 201,
    description: 'Event successfully created',
  })
  @ApiResponse({
    status: 404,
    description: 'Game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data or invalid date range',
  })
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all events',
    description: 'Retrieves a list of all events with optional pagination',
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
    description: 'List of events retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.eventService.findAll(skipNum, takeNum);
  }

  @Get('active')
  @ApiOperation({
    summary: 'Get active events',
    description:
      'Retrieves all currently active events (events that are currently running)',
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
    description: 'List of active events retrieved successfully',
  })
  findActive(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.eventService.findActive(skipNum, takeNum);
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary: 'Get events by game',
    description: 'Retrieves all events for a specific game',
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
    description: 'List of game events retrieved successfully',
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
    return this.eventService.findByGame(gameId, skipNum, takeNum);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get event by ID',
    description: 'Retrieves a specific event by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Event ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Event found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Event with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update event',
    description: 'Updates event information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Event ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateEventDto })
  @ApiResponse({
    status: 200,
    description: 'Event successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Event or game not found',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data or invalid date range',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete event',
    description: 'Permanently deletes an event',
  })
  @ApiParam({
    name: 'id',
    description: 'Event ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Event successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Event with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.remove(id);
  }
}
