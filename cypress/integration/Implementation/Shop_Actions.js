import ShopPage from '../../Pages/PageClasses/ShopPage.js'

const shop = new ShopPage();

//// Valdiate mandatory fields of the page shows errors.
export const Add_To_Cart = (SHOP_ITEM,SHOP_ITEM_VALUE) => {

    for (let i=0;i<SHOP_ITEM.length;i++)
    {
        for(let j=0;j<SHOP_ITEM_VALUE[i];j++)
        {
            shop.ItemBuyLink(SHOP_ITEM[i]).click()
            
        }
    }
}

export const Verify_Items_Added = (SHOP_ITEM,SHOP_ITEM_VALUE) =>{
    for (let i=0;i<SHOP_ITEM.length;i++)
    {
        shop.ItemInputField(SHOP_ITEM[i]).should('have.value',SHOP_ITEM_VALUE[i])
    }
}

export const Verify_Items_Price = (SHOP_ITEM,SHOP_ITEM_PRICE) =>{
    for (let i=0;i<SHOP_ITEM.length;i++)
    {
        shop.ItemPrice(SHOP_ITEM[i]).should('have.text',SHOP_ITEM_PRICE[i])
    }
}

export const Verify_Itemwise_Subtotal_Price = (SHOP_ITEM,SHOP_ITEM_VALUE,SHOP_ITEM_PRICE) =>{
    let ItemTotal
    let ExpectedGrandTotal = 0
    for (let i=0;i<SHOP_ITEM.length;i++)
    {
        SHOP_ITEM_PRICE[i]=SHOP_ITEM_PRICE[i].split('$')[1]
        ItemTotal = SHOP_ITEM_VALUE[i] * SHOP_ITEM_PRICE[i];
        ExpectedGrandTotal = ExpectedGrandTotal + ItemTotal
        ItemTotal = "$"+ItemTotal

        shop.ItemSubtotalPrice(SHOP_ITEM[i]).should('have.text',ItemTotal)
    }
    return ExpectedGrandTotal;
}

export const Verify_GrandTotal_Is_SumOfSubtotal = (SHOP_ITEM,ExpectedGrandTotal) =>{
    var ActualGrandTotal=0;
    for (let i=0;i<SHOP_ITEM.length;i++)
    {
        shop.ItemSubtotalPrice(SHOP_ITEM[i]).invoke('text').then((element) => {
            ActualGrandTotal = +(ActualGrandTotal) + +(element.split('$')[1])
        });
    }
    
    shop.GrandTotalElement.invoke('text').then((element1) => {
        expect(element1).equals("Total: " + ActualGrandTotal).equals("Total: " + ExpectedGrandTotal);
    });
}