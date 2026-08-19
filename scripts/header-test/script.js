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

  function initAndMount() {
    if (!window.universalComponents) {
      log('ERROR: window.universalComponents not found');
      return;
    }
    // init() is async — await the Promise before injecting so the custom element
    // definition is registered and the element upgrades immediately on insertion
    var result = window.universalComponents.init(['header-xd-v1']);
    if (result && typeof result.then === 'function') {
      result.then(function () {
        log('universalComponents.init resolved');
        injectHeader();
        setupObserver();
      }, function (err) {
        log('ERROR: universalComponents.init rejected: ' + err);
        // Even if init rejects, try — element may still be defined
        if (customElements.get('header-xd-v1')) {
          injectHeader();
          setupObserver();
        }
      });
    } else {
      injectHeader();
      setupObserver();
    }
  }

  function main() {
    log('script started');
    // Use the platform's already-loaded universalComponents when available;
    // only load xd/universal-components/next as a fallback
    if (window.universalComponents) {
      log('using platform universalComponents');
      initAndMount();
      return;
    }
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
            log('xd/universal-components loaded');
            initAndMount();
          },
          function () { log('ERROR: failed to load xd/universal-components'); }
        );
      },
      function () { log('ERROR: failed to load xd-utils'); }
    );
  }

  // defer if body not yet parsed (script runs in <head>)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
