module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Re-type Password']")
    },

    perform: function () {
        var selector = page.fillRetypePassRegis.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.PassRegister);
    }

}