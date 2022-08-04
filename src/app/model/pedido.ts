import { Producto } from './producto';
import { Usuario } from './usuario';
export class Pedido {
  constructor(
    public usuario?: Usuario,
    public productos?: Producto [],
    public fecha?: Date,
    public medio_pago?: String,
    public comentario?: String,
  ) {

  }
}
