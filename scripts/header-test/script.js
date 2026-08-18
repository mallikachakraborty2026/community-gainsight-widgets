(function () {
  'use strict';

  console.log('[header-test] script started');

  function log(msg) {
    console.log('[header-test]', msg);
  }

  function loadScript(src, onLoad, onError) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = onLoad;
    s.onerror = onError;
    document.head.appendChild(s);
  }

  loadScript(
    'https://static.sw.cdn.siemens.com/xd/xd-utils/next/xd-utils.min.js',
    function () {
      log('xd-utils loaded OK');
      if (window.disw) {
        window.disw.init({ account: { authEnv: 'dev' }, locales: true });
        log('disw.init called OK');
      } else {
        log('ERROR: window.disw not found after xd-utils load');
      }

      loadScript(
        'https://static.sw.cdn.siemens.com/xd/universal-components/next/web/index.js',
        function () {
          log('universal-components loaded OK');
          if (window.universalComponents) {
            window.universalComponents.init(['header-xd-v1']);
            log('universalComponents.init called OK');
          } else {
            log('ERROR: window.universalComponents not found');
          }
        },
        function () {
          log('ERROR: failed to load universal-components from CDN');
        }
      );
    },
    function () {
      log('ERROR: failed to load xd-utils from CDN');
    }
  );
})();
