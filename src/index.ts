import { DependenciesFactory } from "./dependencies/dependencies-factory";
import { GetPixels } from "./get-pixels";

const handler = async (path: string) => {
  const dependencies = DependenciesFactory.instance;
  const getPixels = new GetPixels(dependencies);

  return await getPixels.execute(path);
};

export { handler };
