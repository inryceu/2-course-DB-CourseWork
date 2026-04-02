import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

export function ApiUserController() {
  return applyDecorators(ApiTags('Users'));
}

export function ApiCreateUser() {
  return applyDecorators(
    ApiOperation({ summary: 'Create a new user' }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'User successfully created',
    }),
    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'User already exists',
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Invalid input data',
    }),
  );
}

export function ApiUnlockAchievement() {
  return applyDecorators(
    ApiOperation({ summary: 'Unlock achievement for user' }),
    ApiResponse({
      status: HttpStatus.CREATED,
      description: 'Achievement unlocked successfully',
    }),
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Domain error (e.g., already unlocked)',
    }),
    ApiResponse({
      status: HttpStatus.NOT_FOUND,
      description: 'User or achievement not found',
    }),
  );
}
