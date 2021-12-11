import HomePage from '../../Pages/PageClasses/HomePage'
import ShopPage from '../../Pages/PageClasses/ShopPage.js'
import BasePage from '../../Pages/PageClasses/BasePage.js'
import {Add_To_Cart,Verify_Items_Added,Verify_Items_Price,Verify_Itemwise_Subtotal_Price,Verify_GrandTotal_Is_SumOfSubtotal} from '../Implementation/Shop_Actions.js'


describe('TC03_Validate shopping cart adds up your buy (Smoke, E2E)', ()=> {
    
    //// Refer Page Classes
    const base = new BasePage();
    const home = new HomePage();
    const shop = new ShopPage();

    //// Load Test Data
    beforeEach(function() {
        cy.fixture('ShopData').then(function(shop_data) {
            this.shop_data=shop_data 
        })
    })

    it('Launch application & Navigate to Shop Page', function() {
        base.launchApplication();
        home.ShopLink.click();
    })

    it('Add shoppping items to Cart', function() {
        Add_To_Cart(this.shop_data.TC03_SHOP_ITEM,this.shop_data.TC03_SHOP_ITEM_VALUE);
    })

    it('Verify the items are in the Cart', function() {
        shop.CartLink.click()
        Verify_Items_Added(this.shop_data.TC03_SHOP_ITEM,this.shop_data.TC03_SHOP_ITEM_VALUE);
    })
})


describe('TC04_Validate shopping Price (Regression, E2E)', ()=> {
    
    //// Refer Page Classes
    const base = new BasePage();
    const home = new HomePage();
    const shop = new ShopPage();

    //// Load Test Data
    beforeEach(function() {
        cy.fixture('ShopData').then(function(shop_data) {
            this.shop_data=shop_data 
        })
    })

    it('Launch application & Navigate to Shop Page', function() {
        base.launchApplication();
        home.ShopLink.click();
    })

    it('Add shoppping items to Cart', function() {
        Add_To_Cart(this.shop_data.TC04_SHOP_ITEM,this.shop_data.TC04_SHOP_ITEM_VALUE);
    })

    it('Verify the items are in the Cart', function() {
        shop.CartLink.click()
        Verify_Items_Added(this.shop_data.TC04_SHOP_ITEM,this.shop_data.TC04_SHOP_ITEM_VALUE);
    })

    it('Verify the price for each product', function() {
        Verify_Items_Price(this.shop_data.TC04_SHOP_ITEM,this.shop_data.TC04_SHOP_ITEM_PRICE);
    })

    let ExpectedGrandTotal
    it('Verify that each product’s sub total = product price * quantity', function() {
        ExpectedGrandTotal = 0;
        ExpectedGrandTotal = Verify_Itemwise_Subtotal_Price(this.shop_data.TC04_SHOP_ITEM,this.shop_data.TC04_SHOP_ITEM_VALUE,this.shop_data.TC04_SHOP_ITEM_PRICE);
    })
    
    it('Verify that total = sum(sub totals)', function() {
        Verify_GrandTotal_Is_SumOfSubtotal(this.shop_data.TC04_SHOP_ITEM, ExpectedGrandTotal);
    })
    
})