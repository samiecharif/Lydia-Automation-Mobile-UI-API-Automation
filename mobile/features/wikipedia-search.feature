Feature: Wikipedia – Mobile UI automation test

  Scenario: Complete onboarding, search and navigate to article
    Given I launch the app
    When I swipe through the onboarding carousel
    And I search for "Lydia"
    And I scroll to the city "Lydia"
    And I change the language to French
    And I scroll to the bottom of the page
    Then I open the article "Crésus"
