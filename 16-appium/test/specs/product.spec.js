import { $, driver, expect } from "@wdio/globals";
import scroll from "../helpers/scroll.js";
import productPage from "../pageobjects/product.page.js";


describe('PRODUCT FEATURE', function () {
    beforeEach(async function () {

        await productPage.menuButton.click()

        await productPage.catalogButton.click()

        await productPage.productImage.click()

        await expect(productPage.productImageTitle).toHaveText('Sauce Labs Backpack')

        await scroll(1000, 700)

    })
    it('Rating the bag with 1 star', async function () {
        
        await productPage.ratingStarProduct1.click()
        
        await expect(productPage.ratingProductTitle).toHaveText('Thank you for submitting your review!')

        await productPage.productConfirm.click()

    })
    it('Rating the bag with 5 star', async function () {

        await productPage.ratingStarProduct5.click()
        
        await expect(productPage.ratingProductTitle).toHaveText('Thank you for submitting your review!')

        await productPage.productConfirm.click()

    })
    it('Change the color bag to blue', async function () {
  
        await productPage.blueColorProduct.click()
        
        await expect(productPage.colorProductTitle).toHaveAttribute('enabled', 'true')

    })
    it('Change the color bag to green', async function () {
  
        await productPage.grayColorProduct.click()
        
        await expect(productPage.colorProductTitle).toHaveAttribute('enabled', 'true')

    })
    it('Input the bag to cart with quantity 0', async function () {

        await productPage.decreaseQtyProduct.click()

        await productPage.addToCartButton.click()

        await expect(productPage.decreaseQtyProductTitle).toHaveAttribute('enabled','false')

    })
    it('Input the bag to cart', async function () {

        await productPage.increaseQtyProduct.click()

        await productPage.addToCartButton.click()

        await productPage.cartProduct.click()

        await expect(productPage.cartProductTitle).toHaveText('$ 59.98')

    })
    it('Remove item from cart using remove item button', async function () {

        await productPage.cartProduct.click()

        await productPage.removeItemCart.click()

        await expect(productPage.cartErrorMessage).toHaveText('No Items')

    })
    it('Remove item from cart using decrease button', async function () {

        await productPage.addToCartButton.click()

        await productPage.cartProduct.click()

        await expect(productPage.cartProductTitle).toHaveText('$ 29.99')

        await productPage.decreaseQtyProduct.click()

        await expect(productPage.cartErrorMessage).toHaveText('No Items')

    })
    it('Check the cart without add to cart', async function () {

        await productPage.cartProduct.click()

        await expect(productPage.cartErrorMessage).toHaveText('No Items')

    })
})