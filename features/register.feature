# .features/register.features

Feature: Register on chataja btwob
    As a user, I want to be able to register

    @success
    Scenario: User success register on btwob chataja
        Given User browse chatAja btwob login page to register
        And User click Sign Up Here button to register
        And User fill email to register to register
        And User fill name to register
        And User fill business name to register
        And User fill phone number to register
        And User fill business category to register
        And User fill business sub category to register
        And User fill password to register
        And User fill retype password to regis  
        When User click register button to register
        Then User success register on btwob chat aja

