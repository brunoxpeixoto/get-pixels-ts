import ndarray, { NdArray } from 'ndarray';
import { GetPixelsInterface } from './interface/get-pixels.interface';
const Bitmap = require('node-bitmap');
const pack = require('ndarray-pack');

export class GetPixelsBMP implements GetPixelsInterface {
  async execute(data: Buffer): Promise<NdArray> {
    return new Promise((resolve, reject) => {
      const bmp = new Bitmap(data);
      try {
        bmp.init();
      } catch (e) {
        reject(e);
      }
      const bmpData = bmp.getData();
      const nshape = [bmpData.getHeight(), bmpData.getWidth(), 4];
      const ndata = new Uint8Array(nshape[0] * nshape[1] * nshape[2]);
      const result = ndarray(ndata, nshape);
      pack(bmpData, result);
      resolve(result.transpose(1, 0));
    });
  }
}
