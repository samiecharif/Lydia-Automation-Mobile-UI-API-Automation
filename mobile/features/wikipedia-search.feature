Feature: Wikipedia mobile search flow

  Scenario: Search Lydia, change language, open Crésus article
    Given I launch the app
    When I swipe through the onboarding carousel
    And I search for "Lydia"
    And I scroll until I see the city "Lydia"
    And I dismiss the popup if visible
    And I change the language to French
    And I scroll to the bottom of the page
    Then I click on "Crésus" and navigate to the new page
