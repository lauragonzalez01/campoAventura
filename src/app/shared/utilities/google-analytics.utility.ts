import {Injectable} from '@angular/core';

declare const ga: any;
declare var dataLayer: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsUtility {
  getClientId(): string {
    return ga.getAll()[0].get('clientId');
  }

  isLoaded(): boolean {
    try {
      return ga !== null && ga !== undefined;
    } catch {
      return false;
    }
  }

  setVariable(variable: string, value: any): void {
    dataLayer.push({ [variable] : value });
  }
}
