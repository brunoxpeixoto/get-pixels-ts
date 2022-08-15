import ndarray, { NdArray } from 'ndarray';
import { DependenciesFactoryInterface } from './dependencies/dependencies-factory.interface';
import mime from 'mime-types';
import fs from 'fs';

class GetPixels {
  constructor(private dependencies: DependenciesFactoryInterface) {}

  async execute(path: string): Promise<NdArray<Uint8Array>> {
    const mimeType = mime.lookup(path);

    const getPixels = this.dependencies.getGetPixels(mimeType as string);

    const buffer = fs.readFileSync(path);

    return await getPixels.execute(buffer);
  }
}

export default GetPixels;
