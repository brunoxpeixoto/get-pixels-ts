import { NdArray } from "ndarray";

export interface GetPixelsInterface {
    execute(data: Buffer): Promise<NdArray>;
}
