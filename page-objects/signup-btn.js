module.exports = {

    url: "https://biz.chataja.co.id/signIn",

    elements: {
        searchInput: by.xpath("//a[contains(text(),'Sign Up Here')]")
    },

    perform: function () {
        var selector = page.signupBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}
