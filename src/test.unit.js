var testing = require('@angular/core/testing');
var platform = require('@angular/platform-browser-dynamic/testing');

if (!initialized) {
  testing.TestBed.initTestEnvironment(
    platform.BrowserDynamicTestingModule,
    platform.platformBrowserDynamicTesting(),
  );
  require('**/*.unit.ts');
  initialized = true;
}

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
