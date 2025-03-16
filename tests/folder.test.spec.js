import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { outputFolder: 'D:/Playwright_VSCode extension/playwright-report' }]], // Stores reports in 'my-custom-reports/' folder.
});