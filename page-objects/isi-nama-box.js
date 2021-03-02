module.exports = {
    url: "https://biz.chataja.co.id/oa",
    elements: {
        searchInput: by.css("div.columns._bg_layout:nth-child(2) div.column.is-flex:nth-child(2) div._content_layout div.modal.is-active:nth-child(2) div.modal-card section.modal-card-body div.field:nth-child(1) div.control > input.input")
    },

    perform: function() {
        var selector = page.isiNamaBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.namaofficial);
    }

}