<p align="center">
<img src= "./images/Viper-Logo-Orange.png" height=300 alt="titleImage.png"/>
</p>

<p align="center">
   <i><strong>Viper is LiveIntent's behavior driven end-to-end automation test framework using protractor jasmine and typescript.
</strong></i>
<p>

---

[![Build Status](https://jenkins.liveintent.com/buildStatus/icon?job=LiveIntent%2Fviper%2Fmaster)](https://jenkins.liveintent.com/job/LiveIntent/job/viper/job/master/)

## Viper Setup Guide

## Features

- All scripts written with Typescript2.0 & Jasmine.
- Neat folder structures with transpiled js files in separate output folder.
- Page Object design pattern implementation.
- Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
- Screenshots on failure feature scenarios.

## To Get Started

## Pre-requisites

1. NodeJS installed globally in the system.
https://nodejs.org/en/download/

2. Chrome or Firefox browsers installed.

3. Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

## Setup Scripts

- Clone the repository into a folder
- Go inside the folder and run following command from terminal/command prompt

```
npm install
```

- All the dependencies from package.json and ambient typings would be installed in node_modules folder.

## Update .env file
Copy over the .env.example file
```
cp .env.example .env
```
Update the credentials in the *.env* file to reflect your valid maverick platform credentials

```
MAVERICK_EMAIL=your_email@liveintent.com
MAVERICK_PASSWORD=yourpassword
```

## Run Scripts

- First step is to fire up the selenium server which could be done in many ways, **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
```

- Then you should start your selenium server!

```
npm run webdriver-start
```

- Now just run the test command which launches the Chrome Browser and runs the scripts.


```
npm test
```


## Writing Specs
```
import { CampaignManagerPage } from "../pages/CampaignManager/CampaignManagerPage";

describe('Setting up e2e Maverick tests', () => {
  beforeEach(async () => {
    await browser.get(config.baseUrl);
    await browser.driver.manage().window().maximize();
  });

  it('should login to maverick', async () => {
    const loginPage = new LoginPage();
    await loginPage.setEmail(process.env.MAVERICK_EMAIL);
    await loginPage.setPassword(process.env.MAVERICK_PASSWORD);  
    browser.waitForAngularEnabled(true);
    await loginPage.submit();
    expect(await browser.getCurrentUrl()).toContain('campaign-manager');
    
  });

});



```

## Writing Page Objects
```
Because this file references protractor, you'll need to have it as a project
dependency to use 'protractor'. Here is the full list of imports:

import {browser, element, by, By, $, $$, ExpectedConditions,ElementFinder} from 'protractor';
import { by, element, ElementFinder } from "protractor";
export class CampaignDashboardPage {
    private campaign_manager_header: ElementFinder;
    private no_accounts_selected_header: ElementFinder;
    private see_alerts_header: ElementFinder;

    constructor() {
        this.campaign_manager_header = element(by.id('platform.campaign-dashboard.campaign-manager.header'));
        this.no_accounts_selected_header = element(by.id('platform.campaign-dashboard.no-accounts-selected.header'));
        this.see_alerts_header = element(by.id('platform.campaign-dashboard.see-alerts.header'));

    }
}
```

## Hooks

Following method takes screenshot on failure of each scenario

```
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
```
## JASMINE Reports
![result](./images/jasmineReport.png)

## HTML Reports

![result](./images/Viper_Report.png)


## Copyright

```
Copyright (c) 2019 LiveIntent

```
