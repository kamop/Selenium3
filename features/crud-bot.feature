# ./features/crud-bot.feature

Feature: Create and Update QnA with Text Answer
    As a user, I want to be able to create and edit qna text answer

    @success
    Scenario: User success login
        Given User browse vutura landing page to create qna text answer
        And User login to create qna text answer
        And User click a botcard button to create qna text answer
        And User click qna button to create qna text answer
        And User click add qna button to create qna text answer
        And User fill a question text box to create qna text answer
        And User click enter to create qna text answer
        And User click text button answer to create qna text answer
        And User fill answer text box create qna text answer
        And User click buat button to create qna text answer
        And User click a qna list button to edit qna text answer
        And User fill a question text box to edit qna text answer
        And User click enter button to edit qna text answer
        And User fill an answer text box to edit qna text answer
        When User click perbaharui button to edit qna text answer
        Then User success to create and update a qna list