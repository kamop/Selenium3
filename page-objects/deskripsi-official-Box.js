module.exports = {
    url: "https://biz.chataja.co.id/oa",
    elements: {
        searchInput: by.xpath("//textarea[@placeholder='Penjelasan Official Accoun']")
    },

    perform: function() {
        var selector = page.deskripsiOfficialBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.deskripsiofficial);
    }

}