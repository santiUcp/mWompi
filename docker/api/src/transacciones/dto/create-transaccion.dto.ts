export class CreateTransaccionDto {
  id_transaccion: string;
  id_wompi: string;
  id_evento_webhook: string;
  id_usuario: string;
  id_cliente: string;
  id_cita: string;
  monto: number;
  moneda: string;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
  metodo_pago: string;
  fecha_creacion: Date;
  fecha_actualizacion: Date;
}
