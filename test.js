test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yens", function() {
    // Importamos la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Si 1.07 dólares son 1 euro, y 1 euro son 156.5 yenes,
    // entonces 1.07 dólares deben ser exactamente 156.5 yenes.
    const yens = fromDollarToYen(1.07);
    
    // La prueba
    expect(yens).toBe(156.5);
});

test("156.5 yens should be 0.87 pounds", function() {
    // Importamos la función desde app.js
    const { fromYenToPound } = require('./app.js');

    // Si 156.5 yenes son 1 euro, y 1 euro son 0.87 libras,
    // entonces 156.5 yenes deben ser 0.87 libras.
    const pounds = fromYenToPound(156.5);

    // La prueba
    expect(pounds).toBe(0.87);
});