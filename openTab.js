// openTab.js
const { exec } = require('child_process');
const cron = require('node-cron');

const url = 'https://leetcode.com/devarshishimpi/';

function openTab() {
  exec(`chromium-browser --new-tab ${url}`);
}

// Schedule to run every 24 hours (at 00:00)
cron.schedule('0 0 * * *', () => {
  openTab();
});
