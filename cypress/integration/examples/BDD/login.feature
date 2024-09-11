Feature: Login functionality
  As a user
  I want to be able to log in to the SauceDemo platform
  So that I can access my account

  Scenario: Failing test login with invalid credentials
    Given I navigate to the SauceDemo login page
    When I enter an invalid username and password
    And I click the login button
    Then I should be redirected to the homepage

  Scenario: Successful login with valid credentials
    Given I navigate to the SauceDemo login page
    When I enter a valid username and password
    And I click the login button
    Then I should be redirected to the homepage

  Scenario: Unsuccessful login with invalid credentials
    Given I navigate to the SauceDemo login page
    When I enter an invalid username and password
    And I click the login button
    Then I should see an error message