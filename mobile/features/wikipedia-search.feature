Feature: Lydia Test – Mobile UI automation

  Scenario: Full onboarding + search + language change + bottom scroll + open article
    Given I launch the app
    When I swipe through the onboarding carousel
    When I search for "Lydia"
    And I scroll to the city "Lydia"
    And I change the language to French
    And I scroll to the bottom of the page
    Then I open the article "Crésus"
