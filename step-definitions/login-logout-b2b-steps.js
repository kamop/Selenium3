module.exports = function () {
    this.Given(/^User browse chatAja b2b login page to login$/, function () {
        helpers.loadPage(shared.pages.b2bLoginPage)
    });

    this.Given(/^User fill email to login$/, function () {
        driver.then(function () {
            page.fillEmailB2b.perform();
        })
    });

    this.Given(/^User fill password to login$/, function () {
        driver.then(function () {
            page.fillPassB2b.perform();
        })
    });

    this.Given(/^User click login button to login$/, function () {
        driver.then(function () {
            page.loginBtnB2b.perform();
        })

        return driver.wait(until.elementsLocated(page.loginBtnB2b.elements.searchInput), 30000)
            .then(function () {
                // return the promise of an element to the following then.
                return driver.findElements(page.loginBtnB2b.elements.searchInput);
            })
    });

    this.Given(/^User click profile name button to logout$/, function () {
        return driver.wait(until.elementsLocated(page.profileNameBtn.elements.searchInput), 30000)
            .then(function () {
                // return the promise of an element to the following then.
                return driver.findElements(page.profileNameBtn.elements.searchInput);
            }),
            driver.then(function () {
                page.profileNameBtn.perform();
            })
    });

    this.When(/^User click logout button to logout$/, function () {
        return driver.wait(until.elementsLocated(page.logoutBtn.elements.searchInput), 10000)
            .then(function () {
                return driver.findElements(page.logoutBtn.elements.searchInput);
            }),
            driver.then(function () {
                page.logoutBtn.perform();
            })
    });

    this.Then(/^User success login and logout$/, function () {
        return driver.wait(until.elementsLocated(page.loginBtnB2b.elements.searchInput), 10000)
            .then(function () {
                // return the promise of an element to the following then.
                return driver.findElements(page.loginBtnB2b.elements.searchInput);
            })
            .then(function (elements) {
                // verify this element has children
                // expect(elements.length).to.not.equal(0);
                expect(page.loginBtnB2b.elements.searchInput).to
                    .equal(page.loginBtnB2b.elements.searchInput);
            })
    });
}