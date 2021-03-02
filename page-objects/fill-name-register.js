module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Name']")
    },

    perform: function () {
        var selector = page.fillNameRegister.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.NameRegister);
    }

}