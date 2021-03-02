module.exports = {

    elements: {
        searchInput: by.xpath("//input[@placeholder='Email']")
    },

    perform: function () {
        var selector = page.fillEmailB2b.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.b2bEmail);
    }

}