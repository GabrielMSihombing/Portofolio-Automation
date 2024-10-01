import { browser, $, expect } from "@wdio/globals";
import productPage from "../pageobjects/product.page.js";



describe('FITUR REVIEW PRODUK', function (){
    before('Cek Click Fusion Backpack Page', async function () {
                await productPage.openPage()
                
                
            })
            it('menekan tab review produk', async function () {
                await productPage.reviewPage()

                await expect(productPage.custReviewTitle).toHaveText(
                expect.stringContaining('Customer Reviews'))
   
            })
            it('menekan tombol add review', async function () {

                await productPage.addReview()

                await expect(productPage.custReviewTitle).toHaveText(
                expect.stringContaining('Customer Reviews'))

                await browser.pause(7000)
            
            })
            it('menekan tombol amount review', async function () {

                await productPage.amountReview()

                await expect(productPage.custReviewTitle).toHaveText(
                expect.stringContaining('Customer Reviews'))

                await browser.pause(7000)
        
            })
            it('Mengecek response jika mengisi semua field rating 1 dan menekan tombol submit', async function () {
                  
                await productPage.optionRatingByValueRating1()
                await browser.pause(5000);
                await productPage.reviewProcess('tanoto','testing Fusion','testing Bagus')
                await productPage.submitButton()
               
                await expect(productPage.successMessage).toHaveText(
                expect.stringContaining('You submitted your review for moderation.'))

                await browser.pause(5000)
            })
            it('Mengecek response jika mengisi semua field dan rating bintang 5', async function () {
                
                await productPage.optionRatingByValueRating5()
                await browser.pause(1000);
                await productPage.reviewProcess('tanot2','testing Fusion','testing Bagus')
                await productPage.submitButton()

                await expect(productPage.successMessage).toHaveText(
                expect.stringContaining('You submitted your review for moderation.'))
            })       
            it('Mengecek response jika mengosongkan field input bintang', async function () {
            
                await productPage.addReview()
                await browser.pause(2000);
                await productPage.reviewProcess('testing','testing Fusion','testing Bagus')
                await productPage.submitButton()

                //belum cek validasi
                // await expect(productPage.errorMessageRating).toHaveText(
                // expect.stringContaining('Please select one of each of the ratings above.'))

            })
            it('mengirim review dengan mengisi semua input kecuali nickname', async function () {
            
                await productPage.optionRatingByValueRating5()
                await browser.pause(10000)
                await productPage.reviewProcess('','testing Fusion','testing Bagus')
                await productPage.submitButton()

                await expect(productPage.nickerrorMessage).toHaveText(
                expect.stringContaining('This is a required field.'))
            })
            it('mengirim review dengan mengisi semua input kecuali summary', async function () {
            
                
                await productPage.optionRatingByValueRating5()
                await browser.pause(10000)
                await productPage.reviewProcess('testing','','testing Bagus')
                await productPage.submitButton()

                await expect(productPage.sumerrorMessage).toHaveText(
                expect.stringContaining('This is a required field.'))
            })
            it('mengirim review dengan mengisi semua input kecuali review', async function () {
            
                await browser.refresh()
                await productPage.optionRatingByValueRating5()
                await browser.pause(10000)
                await productPage.reviewProcess('testing','testing Fusion','')
                await productPage.submitButton()

                await expect(productPage.reviewerrorMessage).toHaveText(
                expect.stringContaining('This is a required field.'))
            })
            it('Mengecek response jika langsung menekan tombol submit', async function () {

                await productPage.reviewProcess('','','')
                await browser.pause(10000)
                await productPage.submitButton()

                await expect(productPage.reviewerrorMessage).toHaveText(
                expect.stringContaining('This is a required field.'))
            })
            it('mengecek response jika menekan tombol add to cart', async function () {
            
                await productPage.addToCartButton()

                await expect(productPage.successMessage).toHaveText(
                expect.stringContaining('You added Fusion Backpack to your shopping cart.'))

            })
            it('mengecek response jika menekan tombol add to cart dengan jumlah barang 0', async function () {

                await productPage.qtyProcess(0)
                await productPage.addToCartButton()
            
                await expect(productPage.errorMessageQty).toHaveText('Please enter a quantity greater than 0.')
                
                await browser.pause(7000)
            })
            it('mengecek response jika menekan tombol add to cart dengan jumlah barang -1', async function () {

                await productPage.qtyProcess(-1)
                await productPage.addToCartButton()
            
                await expect(productPage.errorMessageQty).toHaveText('Please enter a quantity greater than 0.')
                
                await browser.pause(7000)
            })
            it('mengecek response jika menekan tombol add to cart dengan jumlah barang 99999', async function () {

                await productPage.qtyProcess(99999)
                await productPage.addToCartButton()

                await expect(productPage.errorMessageQty).toHaveText('The maximum you may purchase is 10000.')

                await browser.pause(7000)
            })
            it('mengecek response jika menekan tombol add to cart dengan jumlah barang 10000', async function () {

                await productPage.qtyProcess(10000)
                await productPage.addToCartButton()

                await browser.pause(3000)

                await expect(productPage.errorMsgQty).toHaveText('The requested qty exceeds the maximum qty allowed in shopping cart')

                await browser.pause(7000)
            })
            it('meperbesar gambar produk', async function () {

                await productPage.image.click()

                //belum cek validasi
                await browser.pause(7000)
            })
            it('menekan Zoom In gambar produk', async function () {

                await productPage.zoomInOnProduct()

                await browser.pause(7000)
            })
            it('menekan Zoom In gambar produk dan mengganti gambar panah kanan', async function () {

                await productPage.zoomInOnProduct()
                await productPage.nextImage()
            
                const nextIsDisabled = await productPage.validateNextImageDisabled();

                expect(nextIsDisabled).toBe("true");

                await browser.pause(7000)
            })
            it('menekan Zoom In gambar produk dan mengganti gambar panah kiri', async function () {

                await productPage.zoomInOnProduct()
                await browser.pause(3000)
                await productPage.prevImage()
                
                const prevIsDisabled = await productPage.validatePrevImageDisabled();
                expect(prevIsDisabled).toBe("true");

                await browser.pause(7000)
            })
            it('Zoom Out gambar produk', async function () {

                await productPage.zoomOutOnProduct()
                
                //belum cek validasi
                await browser.pause(2000)

                //belum cek validasi
                await productPage.closeImage()
                await browser.pause(7000)
            })
            it('Next image', async function () {

                await productPage.nextImage()
                
                const nextIsDisabled = await productPage.validateNextImageDisabled();

                expect(nextIsDisabled).toBe("true");
                
                await browser.pause(7000)
            })
            it('Previous image', async function () {

                await browser.pause(3000)

                await productPage.prevImage()
                
                const prevIsDisabled = await productPage.validatePrevImageDisabled();

                expect(prevIsDisabled).toBe("true");

                await browser.pause(7000)
            })
        //    it('mengecek jumlah yang diinputkan kedalam cart sama dengan isi cart menggunakan subtotal', async function () {

        //         await productPage.qtyProcess(2)
        //         await productPage.addToCartButton()
        //         await browser.pause(3000)
        //         await productPage.cart()
        //         await productPage.editViewcart()

        //         //belum cek validasi
        //         // await expect(productPage.priceCartElement).toHaveText(
        //         //     expect.stringContaining('$118.00'))

        //         await browser.pause(7000)
        //    })
           
        })