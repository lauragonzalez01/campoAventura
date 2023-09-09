import { TagmanagerUtility } from './tagmanager-utility';

describe('TagManager Utility', () => {
  it('should add scripts', () => {
    const tagManager = new TagmanagerUtility();
    tagManager.addScripts('ABCDE', document.body.firstElementChild);
    const script = document.getElementsByTagName('script')[0];
    const frame = document.getElementsByTagName('iframe')[0];
    expect(script.src).toContain('https://www.googletagmanager.com/gtm.js?id=ABCDE');
    expect(frame.src).toContain('https://www.googletagmanager.com/ns.html?id=ABCDE');
  });
});
