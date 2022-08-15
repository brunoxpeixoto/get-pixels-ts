import ndarray, { NdArray } from 'ndarray';
import { GetPixelsInterface } from './interface/get-pixels.interface';
import jpeg from 'jpeg-js';

export class GetPixelsJPG implements GetPixelsInterface {
  async execute(data: Buffer): Promise<NdArray<Uint8Array>> {
    return new Promise((resolve, reject) => {
      let jpegData;
      try {
        jpegData = jpeg.decode(data);
      } catch (error) {
        reject(error);
      }
      if (!jpegData) {
        reject(new Error('Error decoding jpeg'));
      } else {
        const nshape = [jpegData.height, jpegData.width, 4];
        const result = ndarray(jpegData.data, nshape);
        resolve(result.transpose(1, 0) as NdArray<Uint8Array>);
      }
    });
  }
}
