import { ICustomWorld } from "./custom-world";
import {
	ChromiumBrowser,
	chromium
} from '@playwright/test'
import { After, AfterAll, Before, BeforeAll, ITestCaseHookParameter, Status } from '@cucumber/cucumber'

let browser: ChromiumBrowser

BeforeAll(async function() {
    browser = await chromium.launch({ headless: false })
  });
  
Before(async function(this: ICustomWorld) {
  this.context = await browser.newContext({
		acceptDownloads: true,
		recordVideo: { dir: 'tests/reports/videos' },
		viewport: { width: 1200, height: 800 }
	});
  this.page = await this.context.newPage();
})

After(async function(this: ICustomWorld) {
  await this.page?.close();
  await this.context?.close()
});
  
AfterAll(async function() {
  await browser.close()
});

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
	if (result) {
		if (result.status !== Status.PASSED) {
			const image = await this.page?.screenshot()
			image && (await this.attach(image, 'image/png'))
		}
	}

	await this.page?.close()
	await this.context?.close()
})

After(async function (this: ICustomWorld, { result }: ITestCaseHookParameter) {
	if (result) {
		if (result.status !== Status.PASSED) {
			const video = await this.page?.video()?.path()
			const videoName = video?.split('/').pop()
			var videoHtmlTag='<video src="videos/' + videoName + '" style="max-width: 100%; height: auto;" controls=""></video>';
			video && (await this.attach(videoHtmlTag, 'text/html'))

		} else if (result.status === Status.PASSED) {
			this.page?.video()?.delete()
		}
	}
})