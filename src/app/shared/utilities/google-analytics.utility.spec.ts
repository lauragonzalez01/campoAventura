import { GoogleAnalyticsUtility } from './google-analytics.utility';

describe('Google analytics Utility', () => {
  it('should is loaded', () => {
    const googleAnalyticsUtility = new GoogleAnalyticsUtility();
    const ga = googleAnalyticsUtility.isLoaded();
    expect(ga).toBeFalsy();
  });
});
