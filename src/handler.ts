import { NdArray } from 'ndarray';
import { DependenciesFactory } from './dependencies/dependencies-factory';
import GetPixels from './get-pixels';

const handler = async (path: string): Promise<NdArray<Uint8Array>> => {
  const dependencies = DependenciesFactory.instance;
  const getPixels = new GetPixels(dependencies);

  return await getPixels.execute(path);
};

export { handler };
