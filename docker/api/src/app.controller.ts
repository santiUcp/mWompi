import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'API funcionando dentro de Docker 🚀';
  }

  @Get('saludo/:nombre')
  getSaludo(@Param('nombre') nombre: string): object {
    return { mensaje: `Hola ${nombre}, bienvenido a la API!` };
  }
}
