module.exports = {
    url: "https://biz.chataja.co.id/oa",

    elements: {
        searchInput: by.xpath("//button[contains(text(),'Buat')]")
    },

    perform: function() {
        var selector = page.buatButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}