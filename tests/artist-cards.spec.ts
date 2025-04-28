// tests/artist-cards.spec.ts

import { test, expect } from '@playwright/test';

// Test: Es sollte möglich sein, eine neue Künstlerkarte hinzuzufügen
test('should add a new artist card', async ({ page }) => {
  // Öffne die Anwendung
  await page.goto('http://localhost:5173');

  // Formularfelder ausfüllen
  await page.fill('input[placeholder="Name"]', 'Taylor Swift');
  await page.fill('input[placeholder="Alter"]', '34');
  await page.fill('input[placeholder="Genre"]', 'Pop');
  await page.fill('input[placeholder="Bester Song"]', 'Anti-Hero');
  await page.fill('input[placeholder="Herkunftsland"]', 'USA');
  await page.fill('input[placeholder="Plattenlabel"]', 'Republic Records');
  await page.fill(
    'input[placeholder="Bild-URL"]',
    'https://de.wikipedia.org/wiki/Tupac_Shakur#/media/Datei:Tupac_graffiti,_Vlasotince,_Serbia.jpg'
  );

  // Button "Karte hinzufügen" klicken
  await page.click('button:has-text("Karte hinzufügen")');

  // Erwartung: Die neue Karte mit dem Namen "Taylor Swift" sollte sichtbar sein
  await expect(page.locator('text=Taylor Swift')).toBeVisible();
});
