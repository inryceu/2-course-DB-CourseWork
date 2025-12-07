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
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@ApiTags('Tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new tag',
    description: 'Creates a new game tag',
  })
  @ApiBody({ type: CreateTagDto })
  @ApiResponse({
    status: 201,
    description: 'Tag successfully created',
  })
  @ApiResponse({
    status: 409,
    description: 'Tag with this name already exists',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all tags',
    description: 'Retrieves a list of all tags with optional pagination',
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
    description: 'List of tags retrieved successfully',
  })
  findAll(@Query('skip') skip?: string, @Query('take') take?: string) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.tagService.findAll(skipNum, takeNum);
  }

  @Get('name/:tagName')
  @ApiOperation({
    summary: 'Get tag by name',
    description: 'Retrieves a tag by its name',
  })
  @ApiParam({
    name: 'tagName',
    description: 'Name of the tag',
    example: 'Action',
  })
  @ApiResponse({
    status: 200,
    description: 'Tag found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag with this name not found',
  })
  findByName(@Param('tagName') tagName: string) {
    return this.tagService.findByName(tagName);
  }

  @Get(':id/games')
  @ApiOperation({
    summary: 'Get games by tag',
    description: 'Retrieves all games associated with a specific tag',
  })
  @ApiParam({
    name: 'id',
    description: 'Tag ID',
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
    description: 'List of games with this tag retrieved successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag not found',
  })
  getGamesByTag(
    @Param('id', ParseIntPipe) id: number,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const skipNum = skip ? parseInt(skip, 10) : undefined;
    const takeNum = take ? parseInt(take, 10) : undefined;
    return this.tagService.getGamesByTag(id, skipNum, takeNum);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get tag by ID',
    description: 'Retrieves a tag by its ID',
  })
  @ApiParam({
    name: 'id',
    description: 'Tag ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Tag found and returned',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag with this ID not found',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tagService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update tag',
    description: 'Updates tag information. All fields are optional.',
  })
  @ApiParam({
    name: 'id',
    description: 'Tag ID',
    type: Number,
    example: 1,
  })
  @ApiBody({ type: UpdateTagDto })
  @ApiResponse({
    status: 200,
    description: 'Tag successfully updated',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag with this ID not found',
  })
  @ApiResponse({
    status: 409,
    description: 'Tag name already taken',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTagDto: UpdateTagDto,
  ) {
    return this.tagService.update(id, updateTagDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete tag',
    description: 'Permanently deletes a tag',
  })
  @ApiParam({
    name: 'id',
    description: 'Tag ID',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Tag successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag with this ID not found',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tagService.remove(id);
  }
}
