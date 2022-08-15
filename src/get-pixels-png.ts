import ndarray, { NdArray } from 'ndarray';
import { GetPixelsInterface } from './interface/get-pixels.interface';
import { PNG } from 'pngjs';

export class GetPixelsPNG implements GetPixelsInterface {
  async execute(data: Buffer): Promise<NdArray<Uint8Array>> {
    return new Promise((resolve, reject) => {
      const png = new PNG();
      png.parse(data, function (error, imgData) {
        if (error) {
          reject(error);
        }
        resolve(
          ndarray(
            new Uint8Array(imgData.data),
            [imgData.width | 0, imgData.height | 0, 4],
            [4, (4 * imgData.width) | 0, 1],
            0
          ) as NdArray<Uint8Array>
        );
      });
    });
  }
}
