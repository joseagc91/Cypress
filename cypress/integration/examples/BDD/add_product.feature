Feature: Add products to cart
  As a user
  I want to add products to the cart
  So that I can purchase them later

  Scenario: Add a single product to the cart
    Given I am logged in
    When I add a product to the cart
    Then the product should be visible in the cart

  Scenario: Add multiple products to the cart
    Given I am logged in
    When I add multiple products to the cart
    Then the number of items in the cart should reflect the total
