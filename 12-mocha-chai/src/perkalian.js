function Perkalian(angka1, angka2) {
    if (arguments.length < 2) {
        throw new Error("Dua Parameter Diperlukan");

    }
    if (typeof angka1 !== 'number' || typeof angka2 !== 'number') {
        throw new Error('Parameter harus bertipe number');

    }

    return angka1 * angka2;
}
export{Perkalian};