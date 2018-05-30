# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de javascript](https://platzi.com/js) de platzi, el mejor curo se educación online

## Descripción del idioma

- Si una palabra termina con "ar", se le quitan esas dos letras.
- Si la palabra iniciada con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio.
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom('Programar') // Program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('Abecedario') // abece-dario
platzom('sometemos') // SoMeTeMoS

## Créditos

- [German Alfonso](https://twitter.com/geralfonso)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
