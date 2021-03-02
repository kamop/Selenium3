module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Business Category']")
    },

    perform: function () {
        var selector = page.fillBusinessCategoryRegister.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.BusinessCategoryRegister);
    }

}