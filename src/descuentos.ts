/**
 * RF-DESC · Reglas de descuento por pedido.
 *
 * a) 10 a 24 unidades: 8 % de descuento.
 * b) 25 unidades o más: 15 % de descuento.
 * c) Cupón BIENVENIDA, solo en el primer pedido del cliente: +10 %.
 * d) Pedido de fin de semana: +5 %.
 * e) El descuento total nunca supera el 20 %, sin importar cuántas reglas se combinen.
 */
export function calcularDescuento(
  cantidad: number,
  subtotal: number,
  cupon: string | null,
  esPrimerPedido: boolean,
  esFinDeSemana: boolean
): number {
  let descuento = 0;

  if (cantidad >= 25) descuento += 0.15;
  else if (cantidad >= 10) descuento += 0.08;

  if (cupon === 'BIENVENIDA' && esPrimerPedido) descuento += 0.10;

  descuento = Math.min(descuento, 0.20);

  if (esFinDeSemana) descuento += 0.05;

  return Math.round(subtotal * (1 - descuento) * 100) / 100;
}
