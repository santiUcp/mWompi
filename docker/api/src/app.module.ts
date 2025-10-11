import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TransaccionesModule } from './transacciones/transacciones.module';

@Module({
  imports: [TransaccionesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

