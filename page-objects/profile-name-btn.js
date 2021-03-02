module.exports = {
    elements: {
        searchInput: by.css("div.columns:nth-child(1) div.column:nth-child(2) nav.navbar._navbar div.navbar-menu div.navbar-end div.navbar-item.has-dropdown.is-hoverable > a.navbar-link")
    },

    perform: function () {
        var selector = page.profileNameBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}