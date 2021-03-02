module.exports = function () {
    this.Given(/^User browse chatAja btwob login page to register$/, function () {
        helpers.loadPage(shared.pages.chatajaLoginPage)
    });

    this.Given(/^User click Sign Up Here button to register$/, function () {
        driver.then(function () {
            return page.signupBtn.perform();
        })

    });

    this.Given(/^User fill email to register to register$/, function () {
        driver.then(function () {
            return page.fillEmailRegister.perform();
        })

    });

    this.Given(/^User fill name to register$/, function () {
        driver.then(function () {
            return page.fillNameRegister.perform();
        })
    });

    this.Given(/^User fill business name to register$/, function () {
        driver.then(function () {
            return page.fillBusinessNameRegister.perform();
        })
    });

    this.Given(/^User fill phone number to register$/, function () {
        driver.then(function () {
            return page.fillPhoneNumberRegister.perform();
        })
    });

    this.Given(/^User fill business category to register$/, function () {
        driver.then(function () {
            return page.fillBusinessCategoryRegister.perform();
        })
    });

    this.Given(/^User fill business sub category to register$/, function () {
        driver.then(function () {
            return page.fillBusinessSubcategory.perform();
        })
    });

    this.Given(/^User fill password to register$/, function () {
        driver.then(function () {
            return page.fillPassRegister.perform();
        })
    });

    this.Given(/^User fill retype password to regis$/, function () {
        driver.then(function () {
            return page.fillRetypePassRegis.perform();
        })
    });

    this.When(/^User click register button to register$/, function () {
        driver.then(function () {
            return page.registerBtn.perform();
        })
    });

    this.Then(/^User success register on btwob chat aja$/, function () {
        console.log()    
    });
}