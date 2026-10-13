<div align="center">

# 🔐 CyberKey Generator

**Random passwords, Wi-Fi (WEP) keys and 256-bit keys — generated in your browser, never sent anywhere.**

[**▶ Open the app**](https://dssiqueira.github.io/random-keygen-generator/)

[🇺🇸 English](#english) · [🇧🇷 Português](#português) · [🇪🇸 Español](#español)

</div>

---

<a id="english"></a>

## About

CyberKey Generator is a single static page (HTML, CSS and vanilla JavaScript) with a neon, cyberpunk look. Pick a key type and a new key is generated instantly; one click copies it.

- **10 key types**, from short passwords to 256-bit keys
- **Cryptographically secure** — uses the browser's `crypto.getRandomValues()`, with rejection sampling so every character is equally likely
- **Private** — runs entirely on your device: no server, no tracking, nothing stored
- **3 languages** — Portuguese (default), English and Spanish; the choice is kept in the URL, e.g. `?lang=en`, so you can share links in a given language
- **No build, no dependencies** — open `index.html` and it works

<a id="key-types"></a>

## Key types

| Type | Length | Characters | Strength | Example |
|---|---:|---|---:|---|
| Basic 8 | 8 | `a-z A-Z 0-9` | 48 bits | `7sTzsVgL` |
| Basic 10 | 10 | `a-z A-Z 0-9` | 60 bits | `a0yKTMGY63` |
| Basic 16 | 16 | `a-z A-Z 0-9` | 95 bits | `PlnFoLIWr57jnCul` |
| Strong (not ambiguous) | 16 | letters, digits and symbols, without look-alikes (`l 1 I \| o 0 O`) | 101 bits | `($?u,sFV*qr}%q_Z` |
| Strong | 16 | `a-z A-Z 0-9` + symbols | 103 bits | `$rye:sZ-4l828XIG` |
| High security | 32 | `a-z A-Z 0-9` + symbols | 207 bits | `t=E@cIDEuN9PpzUKk2D#9)zZ^42]@,3p` |
| Encryption key 256 | 64 | hex `0-9 A-F` | 256 bits | `70D6DFC763A4BE11EB0A9CAF…` |
| 64-bit WEP | 10 | hex `0-9 A-F` | 40 bits | `29632DA196` |
| 128-bit WEP | 26 | hex `0-9 A-F` | 104 bits | `79F18CE3C2F49693C3D0CC2482` |
| 256-bit WEP | 58 | hex `0-9 A-F` | 232 bits | `A36B93BE0A839C4910B0F30F…` |

Symbols are `! @ # $ % ^ & * ( ) _ + - = [ ] { } | ; : , . < > ?`. Strength is the entropy of the key (length × log₂ of the alphabet size): roughly, under 60 bits is fine only for low-value accounts, and 80+ bits is strong for anything protected by rate limiting.

> **About WEP:** WEP keys are provided for old routers and devices that only support WEP. WEP itself is broken and can be cracked in minutes regardless of the key, so use WPA2/WPA3 whenever possible.

## Running it

Use the [hosted version](https://dssiqueira.github.io/random-keygen-generator/), or run it locally:

```bash
git clone https://github.com/dssiqueira/random-keygen-generator.git
cd random-keygen-generator
open index.html          # macOS · on Windows: start index.html · on Linux: xdg-open index.html
```

Requires a modern browser (any current Chrome, Edge, Firefox or Safari).

## Project structure

```
index.html        page markup
styles.css        neon / cyberpunk theme
script.js         key types (KEY_TYPES) and the random generator
translations.js   UI text in PT, EN and ES + language switching
```

To add a key type, add an entry to `KEY_TYPES` in `script.js`, a button in `index.html` with the same `data-type`, and its label in each language in `translations.js`.

---

<a id="português"></a>

## 🇧🇷 Português

O CyberKey Generator é uma página estática (HTML, CSS e JavaScript puro) com visual neon/cyberpunk que gera senhas e chaves aleatórias com um clique.

- **10 tipos de chave**, de senhas curtas a chaves de 256 bits (veja a [tabela](#key-types))
- **Criptograficamente seguro**: usa o `crypto.getRandomValues()` do navegador, com amostragem por rejeição para que todo caractere tenha a mesma chance
- **Privado**: roda inteiro no seu dispositivo, sem servidor, sem rastreamento e sem guardar nada
- **3 idiomas**: português (padrão), inglês e espanhol; o idioma fica na URL (ex.: `?lang=en`)
- **Sem build e sem dependências**: é só abrir o `index.html`

As chaves WEP existem para roteadores antigos que só aceitam WEP. O WEP em si é inseguro e pode ser quebrado em minutos, então prefira WPA2/WPA3 sempre que possível.

**Usar:** acesse a [versão online](https://dssiqueira.github.io/random-keygen-generator/) ou clone o repositório e abra o `index.html` no navegador.

---

<a id="español"></a>

## 🇪🇸 Español

CyberKey Generator es una página estática (HTML, CSS y JavaScript puro) con estética neón/cyberpunk que genera contraseñas y claves aleatorias con un clic.

- **10 tipos de clave**, desde contraseñas cortas hasta claves de 256 bits (ver la [tabla](#key-types))
- **Criptográficamente seguro**: usa `crypto.getRandomValues()` del navegador, con muestreo por rechazo para que todos los caracteres tengan la misma probabilidad
- **Privado**: funciona por completo en tu dispositivo, sin servidor, sin rastreo y sin guardar nada
- **3 idiomas**: portugués (predeterminado), inglés y español; el idioma queda en la URL (ej.: `?lang=es`)
- **Sin build ni dependencias**: basta con abrir `index.html`

Las claves WEP existen para routers antiguos que solo admiten WEP. WEP es inseguro y puede romperse en minutos, así que usa WPA2/WPA3 siempre que puedas.

**Uso:** abre la [versión en línea](https://dssiqueira.github.io/random-keygen-generator/) o clona el repositorio y abre `index.html` en el navegador.

---

<div align="center">

Made by [Douglas Siqueira](https://github.com/dssiqueira)

</div>
