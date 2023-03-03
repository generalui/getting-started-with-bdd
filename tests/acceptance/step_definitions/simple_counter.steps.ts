import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ICustomWorld } from './custom-world'

Given('User visits homepage', async function (this: ICustomWorld) {
    const page = this.page!
    await page.goto('localhost:3000')
})

When('User clicks the + button', async function (this: ICustomWorld) {
    const page = this.page!
    const plusButton = await page.locator('[data-testid="increase"]')
    await expect(plusButton).toBeVisible()
    await plusButton.click()
})


Then('User sees the counter get increased', async function (this: ICustomWorld) {
    const page = this.page!
    const counterText = await page.locator('[data-testid="counter-text"]')
    await expect(counterText).toHaveText('Count: 1')
  })

