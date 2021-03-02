module.exports = {

    url: "https://biz.chataja.co.id/signUp",

    elements: {
        searchInput: by.xpath("//button[@class='button is-primary is-medium is-fullwidth']")
    },

    perform: function () {
        var selector = page.registerBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}
