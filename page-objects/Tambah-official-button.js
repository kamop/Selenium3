module.exports = {
    url: "https://biz.chataja.co.id/oa",

    elements: {
        searchInput: by.xpath("//div[@class='createBotButton']")
    },

    perform: function() {
        var selector = page.TambahOfficialButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}