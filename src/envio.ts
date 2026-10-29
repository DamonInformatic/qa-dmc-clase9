/**
 * RF-ENV · Recargo de envío y campaña.
 *
 * a) Pedido de S/ 200 o más: envío gratuito.
 * b) De S/ 50 a S/ 199.99: recargo de S/ 12.
 * c) Menos de S/ 50: recargo de S/ 20.
 * d) Cliente Premium: nunca paga recargo.
 * e) Con campaña activa: envío gratuito en pedidos de más de S/ 100.
 */
export function calcularRecargoEnvio(
  monto: number,
  esPremium: boolean,
  enCampana: boolean
): number {
  if (esPremium) return 0;
  if (enCampana && monto > 100) return 0;
  if (monto >= 200) return 0;
  if (monto > 50) return 12;
  return 20;
}
