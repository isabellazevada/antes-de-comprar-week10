# Persona test · Laura · Week 10

## Fuente y límites
El 18/10/2026 Isabella pegó en el chat de construcción la respuesta de una prueba en un chat nuevo sobre seis capturas ordenadas. Laura es una persona sintética de 54 años de CDMX, usuaria de WhatsApp, lectura lenta y poca experiencia con formularios. Es una hipótesis de diseño, no una entrevista real. La persona evaluó capturas, no botones. El registro de abajo resume el texto aportado; no es una exportación íntegra de aquel chat.

## Tarea ficticia
Revisar una playera para clases de manualidades: $950 de precio, $80 de envío y $800 de presupuesto. Talla y devolución sin confirmar.

## Resultados reportados
- Inicio: entiende la finalidad y que no necesita registro; «demo» poco familiar.
- Oferta: reconoce importes y datos ficticios; debe leer la explicación de «lectura de imagen simulada».
- Selector: no comprende qué cambia entre Tienda A y B.
- Prioridades: comprende las preguntas; «300 caracteres» causa una duda menor.
- Resultado: calcula $1,030 de total y $230 por encima; identifica talla y devolución pendientes, conserva autonomía. No entiende «LLM». El motivo visible difiere del escenario que habría usado.
- Final: comprende que terminó, no hay compra ni trámite ni respuesta humana pendiente. Una captura no verifica el borrado de datos.

## Principal confusión y evidencia
«Si no reconozco mis palabras, dudo de si la revisión es realmente la mía».
El resultado visible decía «Para ir a clase y confinar mis jeans», distinto del motivo de manualidades del escenario. No se veía el formulario llenado: no demuestra que el sistema haya cambiado la entrada. Se registró como duda de correspondencia, no como error de transformación confirmado.

## Verificación y cambios
Se ejecutó una prueba con los manejadores reales de la app mediante un DOM ligero en Node: al escribir «Para ir a clases de manualidades», el HTML del resumen conserva esa frase. No usa un modelo para reescribirla. También se comprobó el escape de contenido HTML y que el acceso a corrección abre prioridades. No son pruebas de navegador.

Cambios de interfaz:
1. Rótulo «Tu motivo, tal como lo escribiste» y acción «Corregir mi motivo» junto al texto.
2. «TEXTO DE EJEMPLO · SIN IA CONECTADA» sustituye la sigla LLM.
3. Se explica que el selector solo cambia el nombre de la tienda ficticia; no compara tiendas ni cambia precios.
4. «Una frase corta es suficiente. Puedes escribir hasta 300 letras, espacios y signos» sustituye «Máximo 300 caracteres».
5. El encabezado usa «Prueba · datos ficticios».

Resultado automatizado tras cambios: 11/11 pruebas aprobadas. Archivo: tests/navigation.test.mjs. Pendiente: repetir la prueba sintética con capturas nuevas de prioridades y resultado, conservando el motivo escrito visible en ambas. No afirmar que Laura entendió los cambios sin esa respuesta. Integración real de LLM y visión todavía pendiente.


## Comprobación final aportada por Isabella
En la tercera revisión sintética, Laura recibió el formulario lleno y el resumen: ambos muestran exactamente «Para ir a clases de manualidades». Confirmó que entiende el origen del texto y la etiqueta de consejo simulado. La comprobación visual del recorrido de edición sigue pendiente; no se presentó una segunda corrección. No se confirmó un fallo de transformación del texto.
