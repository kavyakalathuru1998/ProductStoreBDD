$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "\tIn order to buy the product in webpage\n As a customer\n I want to get access to the portal",
  "keyword": "Feature"
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter username as \u0027kavyakalathuru1998@gmail.com\u0027 and I enter password as \u0027kavyakalathuru\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_Should_access_to_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027\u003cusername\u003e\u0027 and I enter password as \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "veerahemagovada@gmail.com",
        "veerahema"
      ]
    },
    {
      "cells": [
        "oohasri234@gmail.com",
        "9493824001"
      ]
    }
  ]
});
formatter.background({
  "name": "Below are the common steps for the scenarios",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with productstore page.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"No target with given id\"}\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MP8I1T0\u0027, ip: \u0027192.168.43.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\Mypc\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54144}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fa5d67132188d3a8645871aff5ae593a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.cts.stepdefinition.StepDefinition.i_have_browser_with_productstore_page(StepDefinition.java:57)\r\n\tat ✽.I have browser with productstore page.(file:///C:/Users/Mypc/Desktop/SeleniumProgramescts/BDDProductStore/src/main/resources/feature/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Valid Credential Test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter username as \u0027veerahemagovada@gmail.com\u0027 and I enter password as \u0027veerahema\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Should access to the portal with title as \u0027Log out\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_Should_access_to_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
