import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { Public } from 'src/common/decorators/auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("login")
    signIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.email, signInDto.senha);
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    getProfile(@Request() req){
        return req.usuario
    }
}
