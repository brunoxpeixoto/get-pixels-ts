get-pixels-ts
==========
Given a path, grab all the pixels in an image and return the result as an [ndarray](https://github.com/mikolalysenko/ndarray).

Currently the following file formats are supported:

* `PNG`
* `JPEG`
* `GIF`

Example
=======

```typescript
import { handler } from 'get-pixels-ts';

const pixels = await handler("lena.png");

console.log("got pixels", pixels.shape.slice());
```
Install
=======

    npm install get-pixels-ts

### `require("get-pixels-ts")(path)`
Reads all the pixels from path into an ndarray.

* `path` is the path to the file.

**Returns** An ndarray of pixels in raster order having shape equal to `[width, height, channels]`.

**Note** For animated GIFs, a 4D array is returned with shape `[numFrames, width, height, 4]`, where each frame is a slice of the final array.

Credits
=======
(c) 2013-2014 Mikola Lysenko. MIT License
