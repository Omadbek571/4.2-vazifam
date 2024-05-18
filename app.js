// 1-savol
// if1. Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshirilsin, aks holda o'zgartinimasin. Hosil bo'lgan sonni ekranga chiqaruvchi programma tuzilsin

// JAVOBI

// let a = +prompt("ILTIMOS SON KIRITING");

// if (a > 0) {
//     a += 1
// }
// document.write(a);

// 2-savol
// if2. Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshiring, aks holda 2 ga kamaytiring.
// Hosil bo'lgan sonni ekranga chiqaruvc hi programma tuzilsin.

// 2-JAVOBI

// let son = +prompt("ILTIMOS SON KIRITING");

// if (son > 0) {
//     son += 1;
// }
// else{
//     son -= 2;
// }
// document.write(son);


// 3-savol

// if3. Butun son berilgan. Agar, berilgan son musbat bo'lsa, 1 ga oshiring, agar manfiy bo'lsa 2 ga kamaytiring. Agar 0 ga teng bo'lsa, 10 ni o'zlashtirsin. Hosil bo'lgan sonni ekranga chiqaruvchi programma tuzilsin.

// JAVOBI
// let son = +prompt("ILTIMOS SON KIRITING");

// if (son > 0) {
//     son += 1;
// } else if (son < 0) {
//     son -= 2;
// } else {
//     son = 10;
// }

// document.write("Hosil bo'lgan son: " + son);


// 4-savol

// f4. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

// JAVOBI 
// function func(a, b, c) {
//     let num = 0;

//     if (a > 0) {
//         num += 1;
//     }
//     if (b > 0) {
//         num += 1;
//     }
//     if (c > 0) {
//         num += 1;
//     }

//     console.log("Musbat sonlar soni: " + num);
// }

// let a = parseInt(prompt("ILTIMOS A SONINI KIRITING:"));
// let b = parseInt(prompt("ILTIMOS B SONINI KIRITING:"));
// let c = parseInt(prompt("ILTIMOS C SONINI KIRITING:"));

// func(a, b, c);

// 5-savol

// if5. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.

// JAVOBI

// function func(a, b, c) {
//     let musbat = 0;
//     let manfiy = 0;

//     if (a > 0) {
//         musbat += 1;
//     } else if (a < 0) {
//         manfiy += 1;
//     }

//     if (b > 0) {
//         musbat += 1;
//     } else if (b < 0) {
//         manfiy += 1;
//     }

//     if (c > 0) {
//         musbat += 1;
//     } else if (c < 0) {
//         manfiy += 1;
//     }

//     console.log("Musbat sonlar soni: " + musbat);
//     console.log("Manfiy sonlar soni: " + manfiy);
// }

// let a = parseInt(prompt("ILTIMOS A SONINI KIRITING:"));
// let b = parseInt(prompt("ILTIMOS B SONINI KIRITING:"));
// let c = parseInt(prompt("ILTIMOS C SONINI KIRITING:"));

// func(a, b, c);

// 6-savol

// if6. Ikkita butun son berigan. Shu sonlarning kattasini aniqlovchi programma tuzilsin.

// JAVOBI

// function func(a, b) {
//     if (a > b) {
//         console.log("Katta son: " + a);
//     } else if (b > a) {
//         console.log("Katta son: " + b);
//     } else {
//         console.log("Ikkala son teng: " + a);
//     }
// }

// let a = prompt("ILTIMOS A SONINI KIRITING:");
// let b = prompt("ILTIMOS B SONINI KIRITING:");

// func(a, b);


// 7-savol

// if7. Ikkita butun son berilgan. Shu sonlarning kichigini tartib raqamini aniqlovchi programma tuzilsin.

// JAVOBI


// function func(a, b) {
//     if (a < b) {
//         console.log("Katta son: " + a);
//     } else if (b < a) {
//         console.log("Katta son: " + b);
//     } else {
//         console.log("Ikkala son teng: " + a);
//     }
// }

// let a = prompt("ILTIMOS A SONINI KIRITING:");
// let b = prompt("ILTIMOS B SONINI KIRITING:");

// func(a, b);

// 8-savol

// if8. Ikkita butun son berilgan. Shu soniaming awal kattasini keyin kichigini ekranga chiqaruvchi programma tuzilsin.

// JAVOBI

// function func(a, b) {
//     if (a > b) {
//         console.log("Katta son: " + a);
//         console.log("Kichik son: " + b);
//     } else if (b > a) {
//         console.log("Katta son: " + b);
//         console.log("Kichik son: " + a);
//     } else {
//         console.log("Ikkala son teng: " + a);
//     }
// }

// let a = +prompt("ILTIMOS A SONINI KIRITING:");
// let b = +prompt("ILTIMOS B SONINI KIRITING:");

// func(a, b);


// 9-savol

// if9. A va B haqiqiy sonlari beringan. Shu sonlami shunday o'zgartirish kerakki, A son kichik B son katta bo'lsin. A va B ning qiymati ekranga chiqarisin.


// JAVOBI


// function func(a, b) {
//     if (a > b) {
//         let temp = a;
//         a = b;
//         b = temp;
//     }
//     console.log("A son: " + a);
//     console.log("B son: " + b);
// }

// let a = +prompt("ILTIMOS A SONINI KIRITING:");
// let b = +prompt("ILTIMOS B SONINI KIRITING:");

// func(a, b);


// 10-savol

// if10. A va B butun sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa, A va B o'zgaruvchilari ulaming yig'indisini o'zlashtirsin. Agar teng bo'lsa, 0 ni o'zlashtirsin. A va B ning qiymati ekranga chiqarilsin.


// JAVOBI

// function func(a, b) {
//     if (a !== b) {
//         return a + b;
//     } else {
//         return 0;
//     }
// }

// let a = +prompt("ILTOMOS A SONINI KIRITING:");
// let b = +prompt("ILTOMOS B SONINI KIRITING:");

// let result = func(a, b);

// console.log("A ning qiymati: " + a);
// console.log("B ning qiymati: " + b);

// console.log("A va B ning yig'indisi yoki 0: " + result);


// 11-savol

// if11. A va B butun sonlari berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa, A va B bu sonlarning kattasini o'zlashtirsin. Agarteng bo'lsa, 0 ni o'zlashtirsin. A va B ning qiymati ekranga chiqarilsin.

// JAVOBI

// function func(a, b) {
//     if (a !== b) {
//         return Math.max(a, b);
//     } else {
//         return 0;
//     }
// }

// let a = +prompt("ILTOMOS A SONINI KIRITING:");
// let b = +prompt("ILTOMOS B SONINI KIRITING:");

// let result = func(a, b);

// console.log("A ning qiymati: " + a);
// console.log("B ning qiymati: " + b);

// console.log("A va B ning kattasini yoki 0: " + result);


// 12-savol

// if12. Uchta son berilgan. Shu soniami kichigini aniqlovchi programma tuzilsin    


// JAVOBI

// function func(a, b, c) {
//     let min = a; 
//     if (b < min) {
//         min = b;
//     }
//     if (c < min) {
//         min = c;
//     }
//     return min;
// }

// let a = +prompt("ILTOMOS A SONINI KIRITING:");
// let b = +prompt("ILTOMOS B SONINI KIRITING:");
// let c = +prompt("ILTOMOS C SONINI KIRITING:");

// let minNumber = func(a, b, c);

// console.log("Uchta sonning kichigi: " + minNumber);




// 14-savol


// JAVOBI

// let son1 = +prompt("Birinchi sonni kiriting: ");
// let son2 = +prompt("Ikkinchi sonni kiriting: ");
// let son3 = +prompt("Uchinchi sonni kiriting: ");

// var engkichik = son1;
// if (son2 < engkichik) {
//     engkichik = son2;
// }
// if (son3 < engkichik) {
//     engkichik = son3;
// }

// var engkatta = son1;
// if (son2 > engkatta) {
//     engkatta = son2;
// }
// if (son3 > engkatta) {
//     engkatta = son3;
// }

// console.log("Eng kichik son: " + engkichik);
// console.log("Eng katta son: " + engkatta);


// 15-savol

// javobi


// let son1 = parseInt(prompt("Birinchi sonni kiriting: "));
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting: "));
// let son3 = parseInt(prompt("Uchinchi sonni kiriting: "));

// let yigindi = son1 + son2 + son3;

// let engkatta1, engkatta2;

// if (son1 >= son2 && son1 >= son3) {
//     engkatta1 = son1;
//     engkatta2 = son2 >= son3 ? son2 : son3;
// } 
// else if (son2 >= son1 && son2 >= son3) {
//     engkatta1 = son2;
//     engkatta2 = son1 >= son3 ? son1 : son3;
// } 
// else {
//     engkatta1 = son3;
//     engkatta2 = son1 >= son2 ? son1 : son2;
// }

// console.log("Uchta sonning yig'indisi: " + yigindi);
// console.log("Yig'indisi eng katta bo'ladigan ikki son: " + engkatta1 + " va " + engkatta2);




















































