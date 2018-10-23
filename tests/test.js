/**
 * Created by tobi.fagbohungbe on 4/20/16.
 **/
/** Magento Frontend Sanity tests **/

var framework = require('app/framework');
var config = require('app/lib/dataconfig');
var data = config.confData;
var test = require('selenium-webdriver/testing');
var logs = require('app/lib/logging');


test.describe('Magento Frontend Sanity Test - www.konga.com', function() {

    test.beforeEach(function(){
        framework.openbrowser();
        framework.openurl(data.home.url);
    });

  /* test.it('cart', function() {
        framework.cart1(data.type, data.home, data.cart1, data.user);
    });*/

  test.it('log in ', function() {
        framework.login(data.type, data.home, data.login, data.user);
    });

    test.it('sign up ', function() {
        framework.signup(data.type, data.home, data.signup, data.user);
    });

    test.it('Add to Cart', function() {
        framework.add_to_cart(data.type, data.search, data.product, data.cart, data.checkout);
    });

    test.it('Checkout with POD', function() {
        framework.checkout_with_pod(data.type, data.home, data.login, data.user, data.search, data.product, data.cart, data.checkout);
    });


    test.afterEach(function () {
        framework.closebrowser();
    })
});