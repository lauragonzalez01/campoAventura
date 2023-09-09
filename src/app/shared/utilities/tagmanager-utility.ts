export class TagmanagerUtility {

  addScripts(tagManagerKey: string, elementRef: any) {
    const headerTagManagerScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${tagManagerKey}');`;

    const head = document.getElementsByTagName('head').item(0);
    const headerScript = document.createElement('script');
    headerScript.innerHTML = headerTagManagerScript;
    head.appendChild(headerScript);

    const body = document.getElementsByTagName('body').item(0);
    const bodyScript = document.createElement('noscript');
    const bodyFrame = document.createElement('iframe');
    bodyFrame.setAttribute('height', '0');
    bodyFrame.setAttribute('width', '0');
    bodyFrame.setAttribute('src', `https://www.googletagmanager.com/ns.html?id=${tagManagerKey}`);
    bodyFrame.style.setProperty('display', 'none');
    bodyFrame.style.setProperty('visibility', 'hidden');
    bodyScript.appendChild(bodyFrame);
    body.insertBefore(bodyScript, elementRef);
  }
}
