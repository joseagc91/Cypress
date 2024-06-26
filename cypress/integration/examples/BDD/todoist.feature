Feature: Task Management

  Scenario: Add a task
    Given A User is logged into Todoist
    When The User add random task
    Then The User should see the task in the task list

  Scenario: Delete a task
    Given A User is logged into Todoist
    When The User add random task
    And The User delete the task
    Then the task should not be in the task list