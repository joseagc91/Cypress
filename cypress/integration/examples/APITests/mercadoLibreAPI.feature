Feature: Mercado Libre Departments API

  Scenario: Retrieve a list of departments from Mercado Libre API
    Given I make a request to Mercado Libre departments endpoint
    Then I should receive a list of departments