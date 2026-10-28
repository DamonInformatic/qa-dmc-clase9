# qa-dmc-curso

Repositorio de kit de clase · Especialización en QA & Testing Engineering con IA · DMC Institute.

## Uso

```bash
npm install
npx playwright test
```

Deben ver **14 passed** (8 de `tests/descuentos.spec.ts`, Clase 8, y 6 de `tests/envio.spec.ts`, Clase 9).

## Estructura

- `src/descuentos.ts`, `src/envio.ts` — reglas de negocio (RF-DESC, RF-ENV).
- `tests/descuentos.spec.ts` (`@descuentos`), `tests/envio.spec.ts` (`@envio`).
- `.github/workflows/ci.yml` — workflow base: corre toda la suite en cada push y pull request.
- `.github/workflows/pruebas-por-impacto.yml` — workflow manual (`workflow_dispatch`) que corre solo las pruebas de un tag.

## Ramas de la Clase 9

Cada rama trae un Pull Request abierto contra `main`, sin fusionar, con un defecto deliberado para la demo y los talleres:

| Rama | Para qué | Defecto |
|---|---|---|
| `pr-5-envio-campana` | Demo, paso 3 | Baja el umbral de campaña de S/100 a S/80 y reordena el código para que un cliente Premium en campaña deje de pasar por la bandera `esPremium`. |
| `pr-6-combo-fin-de-semana` | Ejercicio guiado | Mueve la suma del 5 % de fin de semana a después del tope del 20 %. |
| `pr-7-pipeline-sin-bloqueo` | Mini reto | Reintroduce el defecto de `pr-5` y agrega `continue-on-error: true` al paso de pruebas en `ci.yml`. |
| `pr-8-recargo-minimo` | Taller individual | Cambia `monto >= 50` a `monto > 50` en el segundo tramo de envío. |

## Publicar en GitHub

```bash
git remote add origin <URL de tu repositorio>
git push -u origin main pr-5-envio-campana pr-6-combo-fin-de-semana pr-7-pipeline-sin-bloqueo pr-8-recargo-minimo
```

Luego abran los cuatro Pull Requests contra `main` desde GitHub (o con `gh pr create`), sin fusionar ninguno.
