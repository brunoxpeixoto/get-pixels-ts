import ndarray, { NdArray } from 'ndarray';
import { GetPixelsInterface } from './interface/get-pixels.interface';
import { GifReader } from 'omggif';

export class GetPixelsGIF implements GetPixelsInterface {
  async execute(data: Buffer): Promise<NdArray<Uint8Array>> {
    const reader = new GifReader(data);
    if (reader.numFrames() > 0) {
      const nshape = [reader.numFrames(), reader.height, reader.width, 4];
      const ndata = new Uint8Array(
        nshape[0] * nshape[1] * nshape[2] * nshape[3]
      );
      const result = ndarray(ndata, nshape);
      for (let i = 0; i < reader.numFrames(); ++i) {
        reader.decodeAndBlitFrameRGBA(
          i,
          ndata.subarray(result.index(i, 0, 0, 0), result.index(i + 1, 0, 0, 0))
        );
      }

      return result.transpose(0, 2, 1) as NdArray<Uint8Array>;
    } else {
      const nshape = [reader.height, reader.width, 4];
      const ndata = new Uint8Array(nshape[0] * nshape[1] * nshape[2]);
      const result = ndarray(ndata, nshape);
      reader.decodeAndBlitFrameRGBA(0, ndata);

      return result.transpose(0, 2, 1) as NdArray<Uint8Array>;
    }
  }
}
