(function () {
  'use strict';

  // Bail out immediately if header is already in the DOM
  if (document.querySelector('header-xd-v1')) return;
  // Bail out if injection is already in progress (prevents race on same load)
  if (window.__xdHeaderInjecting) return;
  window.__xdHeaderInjecting = true;

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
            if (window.__xdHeaderInjected || document.querySelector('header-xd-v1')) {
              log('header-xd-v1 already present, skipping inject');
              window.__xdHeaderInjecting = false;
              return;
            }
            window.__xdHeaderInjected = true;
            var header = document.createElement('header-xd-v1');
            header.setAttribute('scroll', 'true');
            header.setAttribute('account', 'true');
            header.setAttribute('locales', 'true');
            header.setAttribute('search', 'true');
            document.body.insertBefore(header, document.body.firstChild);
            window.__xdHeaderInjecting = false;
            // Reset flag if element is removed from DOM (SPA navigation)
            new MutationObserver(function (_, obs) {
              if (!document.querySelector('header-xd-v1')) {
                window.__xdHeaderInjected = false;
                obs.disconnect();
              }
            }).observe(document.body, { childList: true, subtree: false });
            log('header-xd-v1 injected into page');
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
