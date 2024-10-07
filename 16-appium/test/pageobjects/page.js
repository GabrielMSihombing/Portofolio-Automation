import { $ } from '@wdio/globals';
class Page {

    get productConfirm(){return $('id=com.saucelabs.mydemoapp.android:id/closeBt')}
    get addToCartButton(){return $('~Tap to add product to cart')}
    get menuButton(){return $('~View menu')}
    get catalogButton(){return $('id=com.saucelabs.mydemoapp.android:id/itemTV')}
}
export default Page