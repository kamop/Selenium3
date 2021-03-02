module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Email']")
    },

    perform: function () {
        var selector = page.fillEmailRegister.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.EmailRegister);
    }

}