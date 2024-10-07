import { $ } from '@wdio/globals';
import Page from './page.js'

class productPage extends Page{
get productImage(){return $('id=com.saucelabs.mydemoapp.android:id/productIV')}
get productImageTitle(){return $('id=com.saucelabs.mydemoapp.android:id/productTV')}
get ratingStarProduct1(){return $('id=com.saucelabs.mydemoapp.android:id/start1IV')}
get ratingStarProduct5(){return $('id=com.saucelabs.mydemoapp.android:id/start5IV')}
get ratingProductTitle(){return $('id=com.saucelabs.mydemoapp.android:id/sortTV')}
get blueColorProduct(){return $('~Blue color')}
get grayColorProduct(){return $('~Gray color')}
get colorProductTitle(){return $('id=com.saucelabs.mydemoapp.android:id/colorIV')}
get increaseQtyProduct(){return $('~Increase item quantity')}
get decreaseQtyProduct(){return $('~Decrease item quantity')}
get decreaseQtyProductTitle(){return $('~Tap to add product to cart')}
get cartProduct(){return $('~Displays number of items in your cart')}
get cartProductTitle(){return $('id=com.saucelabs.mydemoapp.android:id/totalPriceTV')}
get cartErrorMessage(){return $('id=com.saucelabs.mydemoapp.android:id/noItemTitleTV')}
get removeItemCart(){return $('~Removes product from cart')}

}
export default new productPage()





