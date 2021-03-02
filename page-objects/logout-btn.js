module.exports = {
    elements: {
        searchInput: by.xpath("//a[contains(text(),'Logout')]")
    },

    perform: function () {
        var selector = page.logoutBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}