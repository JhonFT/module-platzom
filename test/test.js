const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const traslation = platzom("programar");
        expect(traslation).to.equal("program");
    });

    it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
        const traslation = platzom("zarpar");
        const traslation2 = platzom("zorro");
        expect(traslation).to.equal("zarppe");
        expect(traslation2).to.equal("zorrope");
    });

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
        const traslation = platzom("abecedario");
        expect(traslation).to.equal("abece-dario");
    });
    it('si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
        const traslation = platzom("somos");
        expect(traslation).to.equal("SoMoS");
    });
});