import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TransaccionesService {
  private transacciones = [
    {
      id_transaccion: 't001',
      id_wompi: 'w001',
      id_evento_webhook: 'pago_exitoso',
      id_usuario: 'u001',
      id_cliente: 'c001',
      id_cita: 'ct001',
      monto: 85000,
      moneda: 'COP',
      estado: 'pendiente',
      metodo_pago: 'tarjeta_credito',
      fecha_creacion: new Date('2025-10-10T00:00:00.000Z'),
      fecha_actualizacion: new Date('2025-10-10T00:00:00.000Z'),
    },
  ];

  findAll() {
    return this.transacciones;
  }

  findOne(id: string) {
    const transaccion = this.transacciones.find(t => t.id_transaccion === id);
    if (!transaccion) {
      throw new NotFoundException(`Transacción con id ${id} no encontrada`);
    }
    return transaccion;
  }
}
