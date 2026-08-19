(function () {
  'use strict';

  // Skip if header is already injected and still present in DOM
  if (document.body.hasAttribute('data-xd-header') && document.querySelector('header-xd-v1')) return;
  // Skip if another execution is already in progress (race guard)
  if (window.__xdHeaderInjecting) return;
  window.__xdHeaderInjecting = true;
  document.body.setAttribute('data-xd-header', '1');

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
            if (document.querySelector('header-xd-v1')) {
              log('header-xd-v1 already present, skipping inject');
              window.__xdHeaderInjecting = false;
              return;
            }
            var header = document.createElement('header-xd-v1');
            header.setAttribute('scroll', 'true');
            header.setAttribute('account', 'true');
            header.setAttribute('locales', 'true');
            header.setAttribute('search', 'true');
            document.body.insertBefore(header, document.body.firstChild);
            window.__xdHeaderInjecting = false;
            log('header-xd-v1 injected into page');
          } else {
            log('ERROR: window.universalComponents not found');
            window.__xdHeaderInjecting = false;
          }
        },
        function () {
          log('ERROR: failed to load universal-components from CDN');
          window.__xdHeaderInjecting = false;
        }
      );
    },
    function () {
      log('ERROR: failed to load xd-utils from CDN');
    }
  );
})();
