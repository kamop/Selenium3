module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Business Name']")
    },

    perform: function () {
        var selector = page.fillBusinessNameRegister.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.BusinessNameRegister);
    }

}