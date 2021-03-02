module.exports = {
    elements: {
        searchInput: by.xpath("//input[@placeholder='Password']")
    },
    perform: function () {
        var selector = page.fillPassB2b.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.b2bPass);
    }
}