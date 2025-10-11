import { Module } from '@nestjs/common';
import { TransaccionesController } from './transacciones.controller';
import { TransaccionesService } from '../app.service';


@Module({
  controllers: [TransaccionesController],
    providers: [TransaccionesService],

})
export class TransaccionesModule {}
