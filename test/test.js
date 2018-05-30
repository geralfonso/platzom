const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', () => {
  it('Si una palabra termina con "ar", se le quitan esas dos letras', () => {
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");

  });
  it('Si la palabra iniciada con Z, se le añade "pe" al final', () => {
    const translation = platzom('Zorro');
    const translation2 = platzom('Zarpar');
    expect(translation).to.equal("Zorrope");
    expect(translation2).to.equal("Zarppe");
  });
  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', () => {
    const translation = platzom("Abecedario");
    expect(translation).to.equal("Abece-dario");
  });
  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', () => {
    const translation = platzom("sometemos");
    expect(translation).to.equal("SoMeTeMoS");
  });
});
