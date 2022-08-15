import { GetPixelsInterface } from '../interface/get-pixels.interface';

export interface DependenciesFactoryInterface {
    getGetPixels(type: string): GetPixelsInterface;
}