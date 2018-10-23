//validate elements are present first always
var async = require('async');
var webdriver = require('selenium-webdriver');

var vals = require('app/lib/validations');
var help = require('app/lib/helpers');
var config = require('app/lib/dataconfig');
var data = config.confData;

var actions = require('app/lib/actions');
var logger = require('app/lib/logging');
var validator = require('app/lib/validations');

var driver;

module.exports = {

    browsername: null,
    attArray: [],

    openbrowser: function (browser) {
        if (typeof (browser) === 'undefined') { // initialize if driver variable
            browser = data.default_browser;
        } // is undefined
        module.exports.browsername = browser;

        var seleniumAddress = 'http://' +
            (process.env.SELHUB_PORT_4444_TCP_ADDR || process.env.SELENIUM_HUB_HOST || "localhost") +
            ':' +
            (process.env.SELHUB_PORT_4444_TCP_PORT || process.env.SELENIUM_HUB_PORT || 4444) +
            '/wd/hub';

        driver = new webdriver.Builder().usingServer(seleniumAddress)
                .withCapabilities({
                    'browserName': browser,
                    'chromeOptions': {
                        'args': ['--disable-extensions', '--start-maximized']
                    }
                }).build();

        validator.addDriver(driver);
        actions.addDriver(driver);
        help.addDriver(driver);
        logger.addDriver(driver);
        actions.addArray(module.exports.attArray);

        driver.manage().deleteAllCookies();
    },

    openurl: function (url) {
        driver.get(url);
    },

  login: function (type, home, login, user, cb) {
        async.series([
            function (callback) {
                actions.clickButton(type['xpath'], home['login/SignUpBtnXpath'], 'login/signup button');
                driver.sleep(3000);
                callback();
            },

           /* function (callback) {
                actions.clickElement(type['xpath'], login['logInWithFacebooklinkXpath'], 'log in with facebook');
                driver.sleep(1000);
                callback();'
            },*/

            function (callback) {
                actions.sendkeys(type['id'], login['phoneNumberOrEmailAddressBoxId'], 'phone number or email Box', user['email']);
                driver.sleep(1000);
                callback();
            },

            function (callback) {
                actions.sendkeys(type['id'], login['passwordBoxId'], 'password box', user['password']);
                driver.sleep(1000);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], login['logInBtnXpath'], 'login button');
                driver.sleep(3000);
                callback();
            }

        ], cb)
  },

  signup: function (type, home, signup, user, cb) {
        async.series([
            function (callback) {
                actions.clickButton(type['xpath'], home['login/SignUpBtnXpath'], 'signup button');
                driver.sleep(3000);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], home['dontHaveAnAccount?SignUpLinkXpath'], 'Dont have an account? Sign up');
                driver.sleep(1000);
                callback();
            },

           /* function (callback) {
                actions.clickButton(type['xpath'], signup['mrCheckBoxXpath'], 'mr');
                driver.sleep(3000);
                callback();
            },*/

            function (callback) {
                actions.sendkeys(type['xpath'], signup['firstNameBoxXpath'], 'first name box', user['firstname']);
                callback();
            },

            function (callback) {
                actions.sendkeys(type['xpath'], signup['lastNameBoxXpath'], 'last name box', user['lastname']);
                callback();
            },

            function (callback) {
                actions.sendkeys(type['xpath'], signup['emailAddressBoxXpath'], 'email address box', user['email']);
                callback();
            },

            function (callback) {
                actions.sendkeys(type['xpath'], signup['phoneNumberXpath'], 'phone number box', user['phonenumber']);
                callback();
            },

            function (callback) {
                actions.sendkeys(type['xpath'], signup['passwordBoxXpath'], 'password box', user['password']);
                callback();
            },

            /*  function (callback) {
                  actions.sendkeys(type['xpath'], signup['confirmPasswordBoxXpath'], 'confirm password box', user['confirmpassword']);
                  callback();
              },

              function (callback) {
                  actions.clickButton(type['xpath'], signup['termsAndConditionCheckBoxXpath'], 'terms and condition checkbox');
                  driver.sleep(3000);
                  callback();
              },*/
           /* function (callback) {
                actions.clickButton(type['xpath'], signup['logInLinkXpath'], 'already have an account? log in');
                driver.sleep(3000);
                callback();
            }*/


            function (callback) {
                   actions.clickButton(type['xpath'], signup['createAnAccountBtnXpath'], 'create an account button');
                   callback();
               }
        ],cb)
  },

  add_to_cart: function (type, search, product, cart, checkout, cb) {
        async.series([
            function (callback) {
               actions.sendkeys(type['id'], search['labelsearchboxid'], 'Search Box', search['searchSku']);
               callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], search['searchbtnxpath'], 'Search button');
                callback();
            },

            function (callback) {
                vals.validateElementText(type['xpath'], search['searchresultfirstxpath'], search['searchText'], 'First search result');
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], search['firstproductxpath'], 'First Product');
                driver.sleep(3000);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], product['addtocartbtnRxpath'], 'Add to Cart');
                callback();
            },

            function (callback) {
                vals.validateElementText(type['xpath'], cart['cart_item_xpath'], cart['cart_item_txt'], 'item added to cart');
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], cart['del_cart_item_xpath'], 'Delete cart item');
                driver.sleep(3000);
                callback();
            },

            function (callback) {
                vals.validateElementText(type['xpath'], cart['empty_cart_xpath'], cart['empty_cart_txt'], 'Shopping Cart is empty');
                callback();
            }
        ], cb)
  },

  checkout_with_pod: function (type, home, login, user, search, product, cart, checkout, cb) {
        async.series([
            function (callback) {
                actions.clickButton(type['xpath'], home['login_btn_xpath'], 'Login button');
                callback();
            },

            function (callback) {
                actions.sendkeys(type['id'], login['emailorphoneboxid'], 'Email or Phone Box', user['email']);
                callback();
            },

            function (callback) {
                actions.sendkeys(type['id'], login['passwordboxid'], 'password Box', user['password']);
                callback();
            },
            function (callback) {
                actions.clickButton(type['xpath'], login['loginbtnxpath'], 'Login button');
                callback();
            },

            function (callback) {
                actions.sendkeys(type['id'], search['labelsearchboxid'], 'Search Box', search['searchSku']);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], search['searchbtnxpath'], 'Search button');
                callback();
            },

            function (callback) {
                vals.validateElementText(type['xpath'], search['searchresultfirstxpath'], search['searchText'], 'First search result');
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], search['firstproductxpath'], 'First Product');
                driver.sleep(3000);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], product['addtocartbtnRxpath'], 'Add to Cart');
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], cart['proceedcheckoutxpath2'], 'Proceed to Checkout');
                driver.sleep(5000);
                callback();
            },

            function(callback){
                actions.scrollto(227,538);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], checkout['podbtnxpath3'], 'Select POD Button');
                driver.sleep(5000);
                callback();
            },

            function (callback) {
                actions.clickButton(type['xpath'], checkout['paymentbtnxpath'], 'Place Order button');
                driver.sleep(10000);
                callback();
            },

            function (callback) {
                vals.validateElementText(type['xpath'], checkout['successtextxpath'], checkout['successtext'], 'Checkout Successful');
                callback();
            }
        ], cb)
  },

  closebrowser: function (results, title) {
        driver.wait(function () {
            console.log("ready to close browser");
            driver.quit();
            return true;
        }, 10000000)
    }
};