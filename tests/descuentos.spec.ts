import { test, expect } from '@playwright/test';
import { calcularDescuento } from '../src/descuentos';

test.describe('RF-DESC · Descuentos por pedido @descuentos', () => {
  test('menos de 10 unidades no tiene descuento por cantidad', () => {
    expect(calcularDescuento(5, 500, null, false, false)).toBe(500);
  });

  test('10 a 24 unidades tiene 8 % de descuento', () => {
    expect(calcularDescuento(10, 1000, null, false, false)).toBe(920);
  });

  test('9 unidades (frontera, justo debajo del tramo de 10) no tiene descuento', () => {
    expect(calcularDescuento(9, 900, null, false, false)).toBe(900);
  });

  test('25 unidades o más tiene 15 % de descuento', () => {
    expect(calcularDescuento(25, 2500, null, false, false)).toBe(2125);
  });

  test('24 unidades (frontera, justo debajo del tramo de 25) usa el tramo de 8 %', () => {
    expect(calcularDescuento(24, 2400, null, false, false)).toBe(2208);
  });

  test('cupón BIENVENIDA en el primer pedido suma 10 %', () => {
    expect(calcularDescuento(5, 500, 'BIENVENIDA', true, false)).toBe(450);
  });

  test('cupón BIENVENIDA fuera del primer pedido no suma descuento', () => {
    expect(calcularDescuento(5, 500, 'BIENVENIDA', false, false)).toBe(500);
  });

  test('25 unidades + BIENVENIDA en el primer pedido + fin de semana se recorta al tope de 20 %', () => {
    // 15 % + 10 % + 5 % = 30 % nominal, recortado a 20 %.
    expect(calcularDescuento(25, 2500, 'BIENVENIDA', true, true)).toBe(2000);
  });
});
