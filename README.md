# cypress-test-utils-examples

Test Examples using Cypress helpers to control your UI components that work in all test levels. From component tests, through integration tests to e2e tests, for all frameworks: angular, lit, react.
Making TDD fun in the modular UI area.

[![codecov](https://codecov.io/gh/ShellyDCMS/cypress-test-utils-examples/branch/more-covreage/graph/badge.svg?token=D9TQE3K9UE)](https://codecov.io/gh/ShellyDCMS/cypress-test-utils-examples)

CypressHelper makes it saner to write UI testing. It enables creating component drivers that will work on all testing levels (component, integration, e2e).

## Component Drivers

Testing UI is hard. There are many reasons for that, but a big one relies in the fact that unlike functions or services, where the API is clearly defined,
when dealing with graphical user interfaces, it's up for the developer to transform it into an "API" for testing purposes.
Back in the days, [PageObjects](https://martinfowler.com/bliki/PageObject.html) helped mitigate this fact, but once the world moved to modular components,
our test code quality degraded and became bloated with repetition and lack of abstraction.  
Component drivers are just like page objects, but for your components.
Just like page objects, this is merely a pattern, and is not coupled to a specific implementation.
However, using CypressHelper as the basis for your component drivers will help you leverage years of trial and error and be able to fully re-use your drivers across testing levels.
This allows you to confidently write tests that use your actual implementation and keep focusing on the _"what"_ and not the _"how"_

## Philosophy

CypressHelper aims to provide a framework agnostic (angular, lit, react) API for what a manual tester can do.
This means that the API will not focus on implementation, but on the actual action a user would take.
For example, a user doesn't mouseUp, he/she hovers.

## Examples

In the [examples](/examples) folder you can find 3 small apps; an angular app, a lit app and a react app.
Each app contains drivers that use helpers, component tests, integration tests and e2e tests.
As you can see, all test levels use the _same_ driver, meaning that if the feature's implementation changes, you'll need to change the driver alone, not the tests.
