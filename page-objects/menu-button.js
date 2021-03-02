module.exports = {
    url: "https://biz.chataja.co.id/oa",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/section[1]/div[1]/div[1]/div[6]/div[3]")
    },

    perform: function() {
        var selector = page.menuButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}