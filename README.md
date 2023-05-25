# Bufferino

Utilities to work with buffers and bytes.

## Install

```
npm install bufferino
```

## Getting started

```js
import Bufferino from 'bufferino';

Bufferino.hex_to_dec('u16', 'ffff'); // Unsigned 16 bit: 65535
Bufferino.hex_to_dec('i16', 'ffff'); // Signed 16 bit: -1

Bufferino.dec_to_hex('u16', 65535); // Unsigned 16 bit: "ffff"
Bufferino.dec_to_hex('i16', -1); // Signed 16 bit: "ffff"

const buffer = Bufferino.hex_to_buffer('1234567890abcdef'); // ArrayBuffer { byteLength: 8 }
Bufferino.buffer_to_array(buffer); // [ 18, 52, 86, 120, 144, 171, 205, 239 ]
Bufferino.buffer_to_hex(buffer); // "1234567890abcdef"
```

# License

[MIT](./LICENSE)
