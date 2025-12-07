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
import { DevService } from './dev.service';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';

@ApiTags('Developers')
@Controller('devs')
export class DevController {
  constructor(private readonly devService: DevService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new developer/publisher',
    description: 'Creates a new developer or publisher entry',
  })
  @ApiBody({ type: CreateDevDto })
  @ApiResponse({
    status: 201,
    description: 'Developer/publisher successfully created',
  })
  @ApiResponse({
    status: 409,
    description: 'Developer/publisher with this name already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createDevDto: CreateDevDto) {
    return this.devService.create(createDevDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all developers/publishers',
    description:
      'Retrieves a list of all developers and publishers with optional pagination',
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
    description: 'List of developers/publishers retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.devService.findAll(skipNum, takeNum);
  }

  @Get('name/:devName')
  @ApiOperation({
    summary: 'Get developer/publisher by name',
    description: 'Retrieves a developer or publisher by their name',
  })
  @ApiParam({
    name: 'devName',
    description: 'Name of the developer/publisher',
    example: 'CD Projekt RED',
  })
  @ApiResponse({
    status: 200,
    description: 'Developer/publisher found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Developer/publisher with this name not found',
  })
  findByName(@Param('devName') devName: string) {
    return this.devService.findByName(devName);
  }

  @Get(':id/games')
  @ApiOperation({
    summary: 'Get developer games',
    description:
      'Retrieves all games developed/published by a specific developer',
  })
  @ApiParam({
    name: 'id',
    description: 'Developer ID',
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
    description: 'List of developer games retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Developer/publisher not found',
  })
  getDeveloperGames(
    @Param('id', ParseIntPipe) id: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.devService.getDeveloperGames(id, skipNum, takeNum);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get developer/publisher by ID',
    description: 'Retrieves a developer or publisher by their ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Developer ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Developer/publisher found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Developer/publisher with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.devService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update developer/publisher',
    description:
      'Updates developer/publisher information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Developer ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateDevDto })
  @ApiResponse({
    status: 200,
    description: 'Developer/publisher successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Developer/publisher with this ID not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Developer/publisher name already taken',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDevDto: UpdateDevDto,
  ) {
    return this.devService.update(id, updateDevDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete developer/publisher',
    description: 'Permanently deletes a developer or publisher',
  })
  @ApiParam({
    name: 'id',
    description: 'Developer ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Developer/publisher successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Developer/publisher with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.devService.remove(id);
  }
}
