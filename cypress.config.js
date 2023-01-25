const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  video: false,
  env: {
    trashAssetsBeforeRuns: true,
    failSilently: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
