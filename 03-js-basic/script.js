// function clickBtn(){
// // let name = "dinosaurus";
// // console.log(name);
// // name = "kucing";
// // console.log(name);

//     // const city ="Bandung";
//     // console.log(city);

//     // console.log(11%5);
    
//     // const a=90;
//     // const b=5;
//     // let result =a/b;
//     // console.log(result);

//     //string
//     // let name = "dinosurus";
//     // console.log(name);

//     //number
//     // let num1 =3;
//     // let num2 =0.5;
    
//     // console.log(num1*num2);
//     // let bool = true;

//     // console.log(bool);

//     // let bool = null;
//     // console.log(null);

//     console.log("Hello World");
    
// }
//     function greet(name){
//     console.log(name);
// }
//     let fname ="Kucing";
//     greet(fname);
    
//     // function perkalian(a, b){
//     //     let hasil = a*b
//     //     return 'hasil perkalian' = hasil;
//     // }

//     // let result = perkalian(4, 5);
//     // console.log(result);

//     // function tampilkanNilai(nilai){
//     //     return nilai*2;
//     // }
//     //     let hasil= tampilkanNilai(5);
//     //     console.log(hasil);

const input = document.querySelector("#inputText");
const password = document.querySelector("#inputPassword");
const button = document.querySelector("#btn");
const submit = document.querySelector("#btn2");

    function inputBtn(){
        input.value = "testing@gmail.com";
        password.value="testingpassword";
    }
    setTimeout(() => button.click(),3000);

    function submitBtn(){
        alert("Login Berhasil");
    }
    setTimeout(() => submit.click(),6000);

