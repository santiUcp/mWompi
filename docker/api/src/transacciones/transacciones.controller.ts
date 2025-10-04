import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTransaccionDto } from './dto/create-transaccion.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('transacciones')
export class TransaccionesController {
  private transacciones: CreateTransaccionDto[] = [];

  @Get()
  getAll() {
    return this.transacciones;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.transacciones.find(t => t.id_transaccion === id) || { mensaje: 'No encontrada' };
  }

  @Post()
  create(@Body() data: CreateTransaccionDto) {
    const nueva: CreateTransaccionDto = {
      ...data,
      id_transaccion: uuidv4(),
      fecha_creacion: new Date(),
      fecha_actualizacion: new Date(),
    };
    this.transacciones.push(nueva);
    return nueva;
  }
}
