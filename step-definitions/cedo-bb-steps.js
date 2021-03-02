module.exports = function() {
    //Cari cara memanggil function (login)
    this.Given(/^User browse b2b landing page to create official account$/, function() {
        helpers.loadPage(shared.pages.chatajaLoginPage)
    });



    this.Given(/^User login to create official account$/, function() {
        // helpers.loadPage(shared.pages.BBLandingPageVue)

        driver.then(function() {
            return page.fillEmailB2b.perform();
        })

        driver.then(function() {
            return page.fillPassB2b.perform();
        })

        driver.then(function() {
            return page.loginBtnB2b.perform();
        })
    });

    // this.And(/^User login to create official account$/, function() {
    //     return driver.wait(until.elementsLocated(page.CreateOfficialButton.elements.searchInput), 30000).then(function() {
    //             return driver.findElements(page.CreateOfficialButton.elements.searchInput);
    //         }),

    //         driver.then(function() {
    //             return page.CreateOfficialButton.perform();
    //         })

    // });

    this.Given(/^User click tambah official account button to create official account$/, function() {
        return driver.wait(until.elementsLocated(page.TambahOfficialButton.elements.searchInput), 30000).then(function() {
                return driver.findElements(page.TambahOfficialButton.elements.searchInput);
            }),

            driver.then(function() {
                return page.TambahOfficialButton.perform();
            })

    });

    this.Given(/^User fill nama official account text box to create official account$/, function() {
        return driver.wait(until.elementsLocated(page.isiNamaBox.elements.searchInput), 30000).then(function() {
                return driver.findElements(page.isiNamaBox.elements.searchInput);
            }),

            driver.then(function() {
                return page.isiNamaBox.perform();
            })

    });




    // this.Given(/^User fill nama official account text box to create official account$/, function() {
    //     return driver.wait(until.elementsLocated(page.isinamaBox.elements.searchInput), 30000).then(function() {
    //             return driver.findElements(page.isinamaBox.elements.searchInput);
    //         }),

    //         driver.then(function() {
    //             return page.isinamaBox.perform();
    //         })

    // });

    this.Given(/^User fill deskripsi official account text box to create official account$/, function() {
        return driver.wait(until.elementsLocated(page.deskripsiOfficialBox.elements.searchInput), 30000).then(function() {
                return driver.findElements(page.deskripsiOfficialBox.elements.searchInput);
            }),

            driver.then(function() {
                return page.deskripsiOfficialBox.perform();
            })

    });

    this.Given(/^User click buat button to create official account$/, function() {
        return driver.wait(until.elementsLocated(page.buatButton.elements.searchInput), 30000).then(function() {
                return driver.findElements(page.buatButton.elements.searchInput);
            }),

            driver.then(function() {
                return page.buatButton.perform();
            })

    });



    this.Given(/^User click menu button on official account card to delete official account$/, function() {
        return driver.wait(until.elementsLocated(page.menuButton.elements.searchInput), 30000).then(function() {
                return driver.findElements(page.menuButton.elements.searchInput);
            }),

            driver.then(function() {
                return page.menuButton.perform();
            })

    });

    this.When(/^User click delete button on official account card to delete official accountt$/, function() {
        return driver.wait(until.elementsLocated(page.DeleteButton.elements.searchInput), 30000).then(function() {
                return driver.findElements(page.DeleteButton.elements.searchInput);
            }),

            driver.then(function() {
                return page.DeleteButton.perform();
            })

    });

    this.Then(/^User success to create a official account card$/, function() {
        console.log("clicked")
    });


    this.Then(/^User success to delete a official account card$/, function() {
        console.log("clicked")
    });







}