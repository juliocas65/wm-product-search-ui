Feature: Check the product search

  Background:
    Given I want to enter in the url correctly

  Scenario Outline: Look a word in page
    When I enter the word I want to search "<word>"
    Then Products must not be filled

    Examples:
      | word         |
      | esdffsdgggle |
