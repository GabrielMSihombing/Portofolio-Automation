function Perkalian(angka1, angka2) {
  

    if (angka1 === undefined || angka2 === null) 
        throw 'Parameter Harus diisi'
    if (typeof angka1 !== 'number') 
        throw 'Parameter angka1 Harus Berupa Angka'
    if (typeof angka2 !== 'number') 
        throw 'Parameter angka2 Harus Berupa Angka'
    
    const hasil = angka1 * angka2; 
    return hasil;
}
export{Perkalian};