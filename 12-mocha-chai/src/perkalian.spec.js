import { expect } from "chai";
import { Perkalian } from "./perkalian.js";

describe('Perkalian', function() {
    it('Hasil Perkalian Benar', function(){

        const angka1 = 20
        const angka2 = 5

        const hasil = Perkalian(angka1, angka2)
        expect(hasil).to.equal(100);

    })
    
    it('Return Hasil Perkalian berupa angka', function(){

        const angka1 = 20
        const angka2 = 5

        const hasil = Perkalian(angka1, angka2)
        expect(hasil).to.be.a('number');

    })

    it('Hasil Perkalian dengan parameter angka1 berupa string', function(){

        const angka1 = 20
        const angka2 = '5'

        const hasil = Perkalian(angka1, angka2)
        expect(hasil).to.equal('Parameter angka2 Harus Berupa Angka');

    })
    
    it('Hasil Perkalian dengan parameter di kosongkan', function(){

        const hasil = function (){
            Perkalian()
        }
        expect(hasil).to.throw('Parameter Harus diisi');

    })
})