import { $ } from '@wdio/globals';
class Page {

    get productConfirm(){return $('id=com.saucelabs.mydemoapp.android:id/closeBt')}
    get addToCartButton(){return $('~Tap to add product to cart')}
    get menuButton(){return $('~View menu')}
    get catalogButton(){return $('id=com.saucelabs.mydemoapp.android:id/itemTV')}

    // get loginMenu(){return $('~Login Menu Item')}
    // get logoutMenu(){return $('~Logout Menu Item')}
    // get logoutConfirm(){return $('id=android:id/button1')}

}
export default Page