Feature: Chuck Norris API Tests

  Scenario: Get a random Chuck Norris joke successfully
    Given I send a request to the Chuck Norris API
    Then the response status should be 200

  Scenario: Verify the structure of the Chuck Norris joke
    Given I send a request to the Chuck Norris API
    Then the response status should be 200
    And the response should contain a valid joke structure