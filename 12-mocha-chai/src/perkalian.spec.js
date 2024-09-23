import { expect } from "chai";
import { Perkalian } from "./perkalian.js";

describe('Perkalian', function() {
    it('Hasil Perkalian Benar', function(){

        expect(Perkalian(5, 3)).to.equal(15);

    })
    
    it('Return Tipe Data Number', function(){

        expect(Perkalian(5, 3)).to.be.a('number');
    })
    
    it('Tipe Data Parameter', function(){      

        expect(Perkalian("3", 5)).to.be.a('number');

    })
    it('Parameter Tidak Lengkap', function(){      

        expect(Perkalian(5)).to.be.a('number');

    })
})