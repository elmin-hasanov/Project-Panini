// tests/artist-cards.spec.ts

import { test, expect } from '@playwright/test';

test('should add a new artist card', async ({ page }) => {
  // Seite öffnen
  await page.goto('http://localhost:5173');

  // Formular ausfüllen
  await page.fill('input[placeholder="Name"]', 'Taylor Swift');
  await page.fill('input[placeholder="Alter"]', '34');
  await page.fill('input[placeholder="Genre"]', 'Pop');
  await page.fill('input[placeholder="Bester Song"]', 'Anti-Hero');
  await page.fill('input[placeholder="Herkunftsland"]', 'USA');
  await page.fill('input[placeholder="Plattenlabel"]', 'Republic Records');
  await page.fill(
    'input[placeholder="Bild-URL"]',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Taylor_Swift_2_-_2019_by_Glenn_Francis.jpg/440px-Taylor_Swift_2_-_2019_by_Glenn_Francis.jpg'
  );

  // Karte hinzufügen
  await page.click('button:has-text("Karte hinzufügen")');

  // Erwartung: Karte wird angezeigt
  await expect(page.locator('text=Taylor Swift')).toBeVisible();
});
