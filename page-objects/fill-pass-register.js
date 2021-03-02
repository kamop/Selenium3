module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Password']")
    },

    perform: function () {
        var selector = page.fillPassRegister.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.PassRegister);
    }

}