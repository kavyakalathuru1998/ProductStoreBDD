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
  "name": "Empty signup Username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I will not enter the username \u0027\u0027 and i will not enter the password \u0027\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_will_not_enter_the_username_and_i_will_not_enter_the_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should click on signup and I should get the popup message as \u0027Please fill out Username and Password.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinition.i_should_click_on_signup_and_I_should_get_the_popup_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});