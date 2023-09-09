import { IDataLayerObjectModel } from 'codfshared-analytics-utils_web';

export class UtmServiceStub {
  public static getInstance(): UtmServiceStub {
    return new UtmServiceStub();
  }

  public pushObject(dataLayerObjectModel: IDataLayerObjectModel): void {}

  public getSessionUTM(decipherFunction: any): any {
    return JSON.stringify({ utm_source: '123', utm_medium: '123', utm_campaign: '123' });
  }
}
