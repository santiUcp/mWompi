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
    id_transaccion: uuidv4(),
    id_wompi: data.id_wompi,
    id_evento_webhook: data.id_evento_webhook,
    id_usuario: data.id_usuario,
    id_cliente: data.id_cliente,
    id_cita: data.id_cita,
    monto: data.monto,
    moneda: data.moneda,
    estado: data.estado,
    metodo_pago: data.metodo_pago,
    fecha_creacion: new Date(),
    fecha_actualizacion: new Date(),
  };

  this.transacciones.push(nueva);
  return nueva;

  }
}
