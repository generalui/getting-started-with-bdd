Feature: Simple counter
  User wants to use counter to increase or decrease the number on screen

  Scenario: Counter is increased
    Given User visits homepage
    When User clicks the + button 
    Then User sees the counter get increased