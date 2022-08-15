import { GetPixelsBMP } from '../get-pixels-bmp';
import { GetPixelsGIF } from '../get-pixels-gif';
import { GetPixelsJPG } from '../get-pixels-jpg';
import { GetPixelsPNG } from '../get-pixels-png';
import { GetPixelsInterface } from '../interface/get-pixels.interface';
import { DependenciesFactoryInterface } from './dependencies-factory.interface';

export class DependenciesFactory implements DependenciesFactoryInterface {
  private readonly IMAGE_PNG = 'image/png';
  private readonly IMAGE_JPG = 'image/jpg';
  private readonly IMAGE_JPEG = 'image/jpeg';
  private readonly IMAGE_GIF = 'image/gif';
  private readonly IMAGE_BMP = 'image/bmp';

  private static singletonInstance: DependenciesFactory;

  public static get instance(): DependenciesFactory {
    if (!this.singletonInstance) {
      this.singletonInstance = new this();
    }

    return this.singletonInstance;
  }

  public getGetPixels(mimeType: string): GetPixelsInterface {
    if (this.IMAGE_PNG === mimeType) {
      return new GetPixelsPNG();
    } else if (this.IMAGE_JPG === mimeType || this.IMAGE_JPEG === mimeType) {
      return new GetPixelsJPG();
    } else if (this.IMAGE_GIF === mimeType) {
      return new GetPixelsGIF();
    } else if (this.IMAGE_BMP === mimeType) {
      return new GetPixelsBMP();
    } else {
      throw new Error(`Unsupported mime type: ${mimeType}`);
    }
  }
}
