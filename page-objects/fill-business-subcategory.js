module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Business Sub-category']")
    },

    perform: function () {
        var selector = page.fillBusinessSubcategory.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.BusinessSubcategory);
    }

}