module.exports = {
    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/section[1]/div[1]/article[1]/div[1]/form[1]/p[4]/button[1]")
    },

    perform: function () {
        var selector = page.loginBtnB2b.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}