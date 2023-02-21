import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterRequestDto } from '../model/register.request.dto';
import { AuthenticateRequestDto } from '../model/authenticate.request.dto';
import { VerifyRequestDto } from '../model/verify.request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerRequest: RegisterRequestDto) {
    try {
      return await this.authService.registerUser(registerRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('verify')
  async verify(@Body() verifyRequest: VerifyRequestDto) {
    try {
      return await this.authService.confirmRegistration(verifyRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('login')
  async login(@Body() authenticateRequest: AuthenticateRequestDto) {
    try {
      return await this.authService.authenticateUser(authenticateRequest);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
