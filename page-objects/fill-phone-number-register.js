module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Phone Number']")
    },

    perform: function () {
        var selector = page.fillPhoneNumberRegister.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.PhoneNumberRegister);
    }

}