
module.exports = {

    "default_browser": "chrome",
    "home": {
        "url": "http://www.konga.com",
        "pageTitle": "Jumia- online shopping in Nigeria for electronics, mobiles,  fashion and more",
        "cartIconXpath": "//*[@id='cart']/div[1]/a/i",
        "login/SignUpBtnXpath": "//*[@id='__next']/div/div/nav[2]/div[1]/div/div[3]/div[2]/a",
        "login_btn_id": "user-links",
        "val_search_btn": ".//*[@id='search_mini_form']/div/div[1]",
        "search_btn_text": "Search",
        "searchBtnXpath":"//*[@id='__next']/div/div/nav[2]/div[1]/div/div[2]/div/form/button/svg",
        "signUpBtnXpath": "//*[@id='user-links']/a[1]",
        "searchBoxId": "jsSearchInput",
        "search_val_text": "Search for a product, category or brand",
        "liked_item_xpath": "//*[@id='header']/div[2]/div[2]/div[2]/div/div[2]/div[1]/span/a/span",
        "liked_item_txt": "Liked Items",
        "dontHaveAnAccount?SignUpLinkXpath": "//*[@id='__next']/div/div/div[3]/div[2]/div[1]/div[2]/div/div/div[3]/div/a"

    },


    "cart1":{
        "searchBoxXpath":"//*[@id='header-search-input']",
        "searchBtnXpath":"//*[@id='header-search-submit']"
    },


    "login":{
        "phoneNumberOrEmailAddressBoxId":"username",
        "passwordBoxId":"password",
        "logInBtnXpath":"//*[@id='__next']/div/div/div[3]/div[2]/div[1]/div[2]/div/div/div[2]/div/form/div[3]/button"
    },

    "signup":{
       // "mrCheckBoxXpath":"//*[@id='form-validate']/ul[1]/li[1]/div/div/div/input[3]",
        "firstNameBoxXpath":"//*[@id='firstname']",
        "lastNameBoxXpath":"//*[@id='lastname']",
        "emailAddressBoxXpath":"//*[@id='email']",
        "phoneNumberXpath":"//*[@id='phone']",
        "passwordBoxXpath":"//*[@id='password']",
       /* "confirmPasswordBoxXpath":"//*[@id='confirmation']",
        "termsAndConditionCheckBoxXpath":"//*[@id='terms-conditions-customer-registration']",
        "logInLinkXpath":"//*[@id='login_page_wrapper'']/div[3]/a",*/
        "createAnAccountBtnXpath":"//*[@id='form-validate']/ul[2]/li/div/button/span[1]"
    },

    "search":{
        "searchBoxxpath":"//*[@id='search']",
        "labelsearchboxid":"search",
        "searchText":"How to Break Web Software",
        "searchSku":"1119532",
        "searchbtnxpath":"//*[@id='search_mini_form']/div/div[1]",
        "searchresultfirstxpath":"//*[@id='main-content-container']/div[3]/div[2]/div[3]/ul/li[1]/div/div/div[1]/div[1]/a/span",
        "firstproductxpath":"//*[@id='main-content-container']/div[3]/div[2]/div[3]/ul/li[1]/div/a/img"
    },

    "type":{
        "css":"css",
        "id":"id",
        "xpath":"xpath",
        "class":"class",
        "name":"name"
    },

    "user":{
        "email":"obayemmy92@gmail.com",
        "firstname":"gbenga",
        "lastname":"obayemi",
        "password":"democracy",
        "confirmpassword":"democracy",
        "phonenumber":"07062356377",
        "searchText1":"lg television",
        "searchSku":"1119532",
        "searchText2":"play station"
    },

    "acc":{
        "email":"setest@konga.com",
        "password":"PASS123",
        "searchText":"How to Break Web Software",
        "searchsku":"1119532"
    },

    "product":{
        "addtocartbtnxpath1": "//*[@id='main-content-container']/div[3]/div/div[3]/div[6]/button",
        "addtocartbtnxpath": "//*[@id='main-content-container']/div[2]/div/div[2]/div[2]/div[5]/div[2]/button",
        "addtocartbtnclass":"btn btn-default add-to-cart button",
        "addtocartbtnRxpath":"html/body/div[2]/div[4]/div[2]/div/div[2]/div[2]/div[5]/div[2]/button"
    },

    "cart":{
        "proceedcheckoutxpath1": "/html/body/div[6]/div[2]/div/div/div[2]/div[1]/div[2]/div/section/ul/li[1]/button/span/span",
        "proceedcheckoutxpath": "html/body/div[6]/div[2]/div/div/div[2]/div[2]/div/section[1]/ul/li[1]/button",
        "proceedcheckoutclass":"button btn-proceed-checkout btn-checkout",
        "proceedcheckoutxpath2":"(//ul[@class=\"checkout-types\"])[2]/li[1]/button/span/span",
        "cart_item_xpath":"//*[@id='shopping-cart-table']/tbody/tr/td[2]/h2/a",
        "cart_item_txt":"How to Break Web Software",
        "del_cart_item_xpath":"//*[@id='shopping-cart-table']/tbody/tr/td[6]/a",
        "empty_cart_xpath":"html/body/div[6]/div[2]/div/div[2]/div/h1",
        "empty_cart_txt":"Shopping Cart is Empty"
    },

    "checkout":{
        "addressbtnxpath2": "//*[@id='co-billing-form']/div[1]/div[2]/label[1]/div/div[2]/p/span[1]/span",
        "addressbtnxpath":  "//*[@id='co-billing-form']/div[1]/div[2]/div/label[1]/div/div/p/span[1]/span",
        "podbtnxpath": "//*[@id='p_method_cashondelivery']",
        "podbtnxpath2": "//*[@id='checkout-payment-method-load']/dt[1]/div/span",
        "podbtnxpath3": "//*[@id='checkout-payment-method-load']/dt[1]/div/label",
        "podbtnxpath_id": "p_method_cashondelivery",
        "paymentbtnxpath2": "//*[@id='confirm_payment']",
        "paymentbtnxpath": "//*[@id='confirm_payment']/span/span",
        "paymentbtnid": "confirm_payment",
        "successtextxpath":"html/body/div[4]/div/div/div/div[1]/div[1]",
        "xpathsucessMsg":"(//div[@class=\"center\"])[2]",
        "successtext":"Thanks for your order!"
    }
};