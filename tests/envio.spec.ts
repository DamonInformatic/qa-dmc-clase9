import { test, expect } from '@playwright/test';
import { calcularRecargoEnvio } from '../src/envio';

test.describe('RF-ENV · Recargo de envío y campaña @envio', () => {
  test('pedido de S/ 250 sin premium ni campaña paga recargo 0', () => {
    expect(calcularRecargoEnvio(250, false, false)).toBe(0);
  });

  test('pedido de exactamente S/ 50 paga recargo de S/ 12', () => {
    expect(calcularRecargoEnvio(50, false, false)).toBe(12);
  });

  test('pedido de S/ 30 sin premium ni campaña paga recargo de S/ 20', () => {
    expect(calcularRecargoEnvio(30, false, false)).toBe(20);
  });

  test('cliente Premium nunca paga recargo, incluso en pedidos chicos', () => {
    expect(calcularRecargoEnvio(30, true, false)).toBe(0);
  });

  test('pedido de S/ 150 en campaña activa tiene envío gratis', () => {
    expect(calcularRecargoEnvio(150, false, true)).toBe(0);
  });

  test('cliente Premium, S/ 60, campaña activa paga recargo 0', () => {
    expect(calcularRecargoEnvio(60, true, true)).toBe(0);
  });
});
