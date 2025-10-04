import { Module } from '@nestjs/common';
import { TransaccionesController } from './transacciones.controller';

@Module({
  controllers: [TransaccionesController],
})
export class TransaccionesModule {}
