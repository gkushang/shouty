Feature: PayPal Sign-up

  Scenario: Sign-up to PayPal

    Given I sign up for personal account
    And I input all required information
    Then I successfully signed up for new account
