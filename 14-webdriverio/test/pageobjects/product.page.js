import { $ } from "@wdio/globals";
class productPage{

    get nicknameInput(){return $('#nickname_field')}
    get summaryInput(){return $('#summary_field')}
    get reviewInput(){return $('#review_field')}
    // get submitBtn(){return $('.action.submit.primary')}
    get nickerrorMessage(){return $('#nickname_field-error')}
    get sumerrorMessage(){return $('#summary_field-error')}
    get reviewerrorMessage(){return $('#review_field-error')}
    get errorMessageRating(){return $('#ratings[4]-error')}
    get successMessage(){return $('.messages')}
    get custReviewTitle(){return $('#customer-reviews')}
    get inputQty (){return $('.input-text.qty')}
    get errorMessageQty (){return $('#qty-error')}
    get errorMsgQty(){return $('.messages')}
    get priceCartElement (){return $('.amount')}
    get image(){return $('.fotorama__img')}
    get imageValidation(){return $('.fotorama__arr--prev[disabled="disabled"]')}
    get nextArrow(){return $('.fotorama__arr--next')}
    get prevArrow(){return $('.fotorama__arr--prev')}

    get zoomInImage (){return $('.fotorama__nav__frame fotorama__nav__frame--fotorama__zoom-in zoom-in-loaded')}
    get validateZoomInImage (){return $('.fotorama__stage__shaft')}

    
  
    async openPage (){
        await browser.url('https://magento.softwaretestingboard.com/fusion-backpack.html')
        await browser.maximizeWindow()
    }

    async reviewPage(){
      const reviewButton = await $('#tab-label-reviews-title')
      await reviewButton.click()
    }

    async optionRatingByValueRating1() {
        const addReviewButton = await $('a.action.add')
        await addReviewButton.click()
        // await addReviewButton.click()
        await browser.execute(function () {
            document.querySelector('#Rating_1').checked = true
            
        })
    }
    async optionRatingByValueRating5() {
        const addReviewButton = await $('a.action.add')
        await addReviewButton.click()
        // await addReviewButton.click()
        await browser.execute(function () {
            document.querySelector('#Rating_5').checked = true
            
        })
    }
    async submitButton() {
        const submitButtonOnly = await $('.action.submit.primary').click()
    }
    
    //review page action
    async reviewProcess(nickname, summary, review) {
        await this.nicknameInput.setValue(nickname)
        await this.summaryInput.setValue(summary)
        await this.reviewInput.setValue(review)
        // await this.submitBtn.click()
    
   }
   async qtyProcess(qty) {
    await this.inputQty.setValue(qty)
   }
   async addToCartButton() {
        const addCartBtn = await $('#product-addtocart-button')
        await addCartBtn.click()
   }
   async addReview() {
        const addreview = await $('a.action.add')
        await addreview.click()
   }
   async amountReview() {
        const addreview = await $('a.action.view')
        await addreview.click()
    }
   async zoomInOnProduct() {
        const zoomInButton = $('.fotorama__zoom-in[data-gallery-role="fotorama__zoom-in"]');

        await zoomInButton.click();
    }
   async zoomOutOnProduct() {
        const zoomOutButton = $('.fotorama__zoom-out[data-gallery-role="fotorama__zoom-out"]');
        await zoomOutButton.click();
   
    }
    async priceProductElement() {
        const totalPriceProduct = await $('.amount[data-th="Order Total"]')

    }
    async cart() {
        const CartPage = $('.action.showcart[href="https://magento.softwaretestingboard.com/checkout/cart/"]');
        await CartPage.click();
   
    }
    async editViewcart() {
        const viewCartPage = $('.action.viewcart');
        await viewCartPage.click();
    }
    async closeImage() {
        const nextBtnImage = $('.fotorama__fullscreen-icon')
        await nextBtnImage.click()
    }
    async nextImage() {
        const nextBtnImage = $('.fotorama__arr--next')
        await nextBtnImage.click()
    }
    async prevImage() {
        const prevtBtnImage = $('.fotorama__arr--prev')
        await prevtBtnImage.click()
    }
    async validateNextImageDisabled() {
        // Check if the button has the 'disabled' attribute or class
        const nextIsDisabled = await this.nextArrow.getAttribute('disabled') ||
        await this.nextArrow.getAttribute('class').includes('disabled');
        
        return nextIsDisabled;
    }
    async validatePrevImageDisabled() {
        
        
        const prevIsDisabled = await this.prevArrow.getAttribute('disabled') ||
        await this.prevArrow.getAttribute('class').includes('disabled');
        
        return prevIsDisabled;
    }
}
export default new productPage()