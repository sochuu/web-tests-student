import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-marker="login-button-desktop"]').click();
  await page.locator('[data-marker="login-submit-button"]').click();

  // Я ничего не поняла, простите, была на паре в вузе в конце лекции-начале практики. Я просто вижу что   ✓  1 [chromium] после всей работы с файлом
  // 1. Строка падения — этот expect (email-error)
  // 2. [data-marker="email-error" под полем email после submit
  // 3. Expected: Неверный email. Received: Email обязателен»
  // 4. Исправила ожидание на текст с экрана
  // 5. Повторила тот же тест — проходит. Я специально подставила неверный текст, playwright сравнил Expected и Received, узел email-error верный, текст на сайте “Email обязателен”

  await expect(page.locator('[data-marker="email-error"]')).toHaveText('Email обязателен');
  await expect(page.locator('[data-marker="password-error"]')).toHaveText('Пароль обязателен');
});


