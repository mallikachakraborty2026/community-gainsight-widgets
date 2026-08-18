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

  function initHeader() {
    // skip xd-utils load if disw is already initialised by the page
    if (window.disw) {
      log('window.disw already exists, skipping xd-utils load');
      loadUniversalComponents();
    } else {
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
          loadUniversalComponents();
        },
        function () {
          log('ERROR: failed to load xd-utils from CDN');
        }
      );
    }
  }

  function loadUniversalComponents() {
    // skip if universal-components already registered by the page
    if (window.universalComponents) {
      log('window.universalComponents already exists');
      injectHeader();
      return;
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
        injectHeader();
      },
      function () {
        log('ERROR: failed to load universal-components from CDN');
      }
    );
  }

  function injectHeader() {
    if (document.querySelector('header-xd-v1')) {
      log('header-xd-v1 already exists in page, skipping inject');
      return;
    }
    var header = document.createElement('header-xd-v1');
    header.setAttribute('scroll', 'true');
    header.setAttribute('account', 'true');
    header.setAttribute('locales', 'true');
    header.setAttribute('search', 'true');
    document.body.insertBefore(header, document.body.firstChild);
    log('header-xd-v1 injected into page');
  }

  initHeader();
})();
