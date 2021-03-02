# ./features/login-logout-b2b.feature

Feature: User login and logout
    As a user, I want to be able to login and logout

    @success
    Scenario: User success login and logout
        Given User browse chatAja b2b login page to login
        And User fill email to login
        And User fill password to login
        And User click login button to login
        And User click profile name button to logout
        When User click logout button to logout
        Then User success login and logout