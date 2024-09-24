import { expect } from "chai";
import { Perkalian } from "./perkalian.js";

describe('Perkalian', function() {
    it('Hasil Perkalian Benar', function(){

        const angka1 = 20
        const angka2 = 5

        const hasil = Perkalian(angka1, angka2)
        expect(hasil).to.equal(100);

    })
    
    it('Return Hasil Perkalian berupa angka dengan angka 1 merupakan string', function(){

        const angka1 = '20'
        const angka2 = 5

        const hasil = () => Perkalian(angka1, angka2)
        expect(hasil).to.throw('Parameter angka1 Harus Berupa Angka');

    })

    it('Return Hasil Perkalian berupa angka dengan angka 2 merupakan string', function(){

        const angka1 = 20
        const angka2 = '5'

        const hasil = () => Perkalian(angka1, angka2)
        expect(hasil).to.throw('Parameter angka2 Harus Berupa Angka');

    })

    it('Hasil Perkalian dengan parameter angka 1 berupa string', function(){

        const angka1 = '20'
        const angka2 = 5

        const hasil = () => Perkalian(angka1, angka2)
        expect(hasil).to.throw('Parameter angka1 Harus Berupa Angka');

    })

    it('Hasil Perkalian dengan parameter angka 2 berupa string', function(){

        const angka1 = 20
        const angka2 = '5'

        const hasil = () => Perkalian(angka1, angka2)
        expect(hasil).to.throw('Parameter angka2 Harus Berupa Angka');

    })

    it('Hasil Perkalian dengan parameter tidak lengkap', function(){

        const angka1 = 20

        const hasil = () => Perkalian(angka1)
        expect(hasil).to.throw('Parameter Harus diisi');

    })

    it('Hasil Perkalian dengan parameter Kosong', function(){

        const hasil = function (){
            Perkalian()
        }
        expect(hasil).to.throw('Parameter Harus diisi');

    })
})