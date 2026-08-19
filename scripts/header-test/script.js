(function () {
  'use strict';

  // Run setup only once per page lifetime
  if (window.__xdHeaderInit) return;
  window.__xdHeaderInit = true;

  function log(msg) {
    console.log('[header-test]', msg);
  }

  function injectHeader() {
    if (document.querySelector('header-xd-v1')) return;
    var header = document.createElement('header-xd-v1');
    header.setAttribute('scroll', 'true');
    header.setAttribute('account', 'true');
    header.setAttribute('locales', 'true');
    header.setAttribute('search', 'true');
    document.body.insertBefore(header, document.body.firstChild);
    log('header-xd-v1 injected');
  }

  function setupObserver() {
    // Re-inject if Gainsight SPA or hydration removes the header
    var observer = new MutationObserver(function () {
      if (!document.querySelector('header-xd-v1')) {
        injectHeader();
      }
    });
    observer.observe(document.body, { childList: true });
  }

  function loadScript(src, onLoad, onError) {
    // Skip if already in DOM (e.g. repeated SPA page loads)
    if (document.querySelector('script[src="' + src + '"]')) {
      onLoad();
      return;
    }
    var s = document.createElement('script');
    s.src = src;
    s.onload = onLoad;
    s.onerror = onError;
    document.head.appendChild(s);
  }

  function main() {
    log('script started');
    loadScript(
      'https://static.sw.cdn.siemens.com/xd/xd-utils/next/xd-utils.min.js',
      function () {
        log('xd-utils loaded');
        if (window.disw) {
          window.disw.init({ account: { authEnv: 'dev' }, locales: true });
        }
        loadScript(
          'https://static.sw.cdn.siemens.com/xd/universal-components/next/web/index.js',
          function () {
            log('universal-components loaded');
            if (window.universalComponents) {
              window.universalComponents.init(['header-xd-v1']);
              injectHeader();
              setupObserver();
            } else {
              log('ERROR: window.universalComponents not found');
            }
          },
          function () {
            log('ERROR: failed to load universal-components');
          }
        );
      },
      function () {
        log('ERROR: failed to load xd-utils');
      }
    );
  }

  // defer if body not yet parsed (script runs in <head>)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
