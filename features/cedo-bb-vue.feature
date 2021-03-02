# ./features/cedo-bb-vue.feature

Feature: cedo-bb-vue on BB Website
    As a user, I want to do login on vutura Website

    @success
    Scenario: User success login
        Given User browse b2b landing page to create official account
        And User login to create official account
        And User click tambah official account button to create official account
        And User fill nama official account text box to create official account
        And User fill deskripsi official account text box to create official account
        And User click buat button to create official account
        And User click menu button on official account card to delete official account
        # And User click delete button on official account card to delete official account
        # And User success to create a official account card 
        # Then User success to delete a official account card
