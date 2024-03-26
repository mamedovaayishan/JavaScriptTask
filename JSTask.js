// JS TASK 1 
// 1.	İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)
// 2.	Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın.
// 3.	1-dən 10-a qədər ədədlərin cəmini və hasilini tapın.
// 4.	1-dən 100-ə qədər cüt ədədləri, onların cəmini və hasilini tapın.
// 5.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın.
// 6.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın.
// 7.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın.
// 8.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// 9.	3 rəqəmli ədədlərin ədədi ortasını tapın.
// 10.	İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.
// 11.	Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.
// 12.	Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
// 13.	1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.
// 14.	12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
// 15.	İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)

// // 1.	İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)
// var num = 15;
// if (num % 2 === 0) {
//   console.log(num + " cüt ədəddir");
// } else {
//   console.log(num + " tək ədəddir");
// }

// // 2.	Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın.
// var num1 = 5;
// var num2 = 12;
// var num3 = 20;
// // ən boyuk
// if (num1 >= num2 && num1 >= num3) {
//   console.log(num1 + " ən büyük rəqəmdir");
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log(num2 + " ən büyük rəqəmdir");
// } else {
//   console.log(num3 + " ən büyük rəqəmdir");
// }
// //ən kicik
// if (num1 <= num2 && num1 <= num3) {
//   console.log(num1 + " ən kiçik rəqəmdir");
// } else if (num2 <= num1 && num2 <= num3) {
//   console.log(num2 + " ən kiçik rəqəmdir");
// } else {
//   console.log(num3 + " ən kiçik rəqəmdir");
// }


// // 3.	1-dən 10-a qədər ədədlərin cəmini və hasilini tapın.
// var total = 0;
// for (i = 1; i <= 10; i++) {
//   total = total + i; // cem + = i
// }
// console.log(total); //1-dən 10-a qədər ədədlərin cəmi = 55

// var result = 1;
// for (i = 1; i <= 10; i++) {
//   result = result * i; // hasil * = i
// }
// console.log(result); //1-dən 10-a qədər ədədlərin hasili  =  362880
// //

// // 4.	1-dən 100-ə qədər cüt ədədləri, onların cəmini və hasilini tapın.

// // for (var i = 2; i <= 100; i = i + 2) {
// //     console.log(i);
// // }

// var total = 0;
// for (var i = 2; i <= 100; i = i + 2) {
//   total = total + i; // total + = i
// }
// console.log(total); // 2550

// var total = 1;
// for (var i = 2; i <= 100; i += 2) {
//   total *= i; //total * = i
// }
// console.log(total); // 3.4243224702511973e+79

// // 5.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın.

// for (var i = 100; i <= 999; i++) {
//   if (i % 7 === 0 && i % 8 === 0) {
//     console.log(i + " 7 və 8-ə bölünən bir ədəddir.");
//   }
// }
// // 6.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın.
// var toplam = 0;
// for (var i = 100; i <= 999; i++) {
//   if (i % 7 === 0 && i % 8 === 0) {
//     // console.log(i );
//     toplam += i;
//   }
//   // console.log("Toplam: " + toplam);
// }
// console.log("7 və 8-ə bölünən ədədlərin cəmi: " + toplam);

// // 7.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın.
// var toplam = 0;
// for (var i = 100; i <= 999; i++) {
//   if (i % 7 === 0 && i % 8 === 0) {
//     console.log(" 7 və 8-ə bölünən birinci ədəddir: " + i);
//     break;
//   }
// }
// // 8.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.

// for (var i = 999; i >= 100; i--) {
//   if (i % 7 === 0 && i % 8 === 0) {
//     console.log(" 7 və 8-ə bölünən sonuncu ədəddir: " + i);
//     break;
//   }
// }

// // 9. 3 rəqəmli ədədlərin ədədi ortasını tapın.

// var num = 345;

// var birler = num % 10;
// var onlar = Math.floor(num / 10) % 10;
// var yuzler = Math.floor(num / 100);

// var toplam = birler + onlar + yuzler;

// if (toplam != 0) {
//   var ort = num / toplam;
//   console.log("3 rəqəmli ədədin cəminin onların sayına bölünməsi: " + ort);
// } else {
//   console.log("Rəqəmlərin cəmi sıfıra bərabərdir!");
// }


// // 10.	İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.


// var num1 = parseInt(prompt("Birinci rəqəmi daxil edin:"));
// var num2 = parseInt(prompt("İkinci rəqəmi daxil edin:"));
// var emel = prompt("Riyazi əməli daxil edin (+, -, *, /):");

// var netice;

// if (emel === "+") {
//   netice = num1 + num2;
// } else if (emel === "-") {
//   netice = num1 - num2;
// } else if (emel === "*") {
//   netice = num1 * num2;
// } else if (emel === "/") {
//   netice = num1 / num2;
// } else {
//   console.log("Düzgün əməl daxil edin!");

//   return;
// }


// console.log("Nəticə:", netice);

// var eded = parseInt(prompt("Bir ədəd daxil edin:"));


// for (var i = 100; i < 1000; i++) {
//   if (i % eded === 0) {
//     console.log(i);
//   }
// }

// // 12.	Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
// var eded = parseInt(prompt("Bir ədəd daxil edin:"));

// console.log(eded + " ədədin bütün mümkün tam bölənləri:");

// for (var i = 1; i <= eded; i++) {
//   if (eded % i === 0) {
//     console.log(i);
//   }
// }

// // 13.	1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.

// console.log("Sadə ədədlər:");
// for (var i = 2; i <= 100; i++) {
//   var sade = true;
//   for (var j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       sade = false;
//       break;
//     }
//   }
//   if (sade) {
//     console.log(i);
//   }
// }

// console.log("Mürəkkəb ədədlər:");
// debugger
// for (var k = 2; k <= 100; k++) {
//   var murəkkəb = false;
//   for (var l = 2; l <= Math.sqrt(k); l++) {
//     if (k % l === 0) {
//       murəkkəb = true;
//       break;
//     }
//   }
//   if (murəkkəb) {
//     console.log(k);
//   }
// }

// // 14.	12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
// console.log("12 ədədi hansı iki ədədin cəmi olar:");

// for (var i = 1; i <= 12 / 2; i++) {
//   var j = 12 - i;
//   console.log(i + " və " + j);
// }


// // 15.	İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)

// var x = 5;
// var y = 6;

// console.log("Əvvəl:");
// console.log("x =", x);
// console.log("y =", y);


// var temp = x;
// x = y;
// y = temp;

// console.log("Sonra:");
// console.log("x =", x);
// console.log("y =", y);




// JS TASK 2

// 1. Array elementlərinin cəmini / hasilini tapın ----------------------

// Toplama əməliyyatı
// function topla(sira) {
//   let cem = 0;
//   for (let i = 0; i < sira.length; i++) {
//       cem += sira[i];
//   }
//   return cem;
// }
// Vurma əməliyyatı
// function vur(sira) {
//   let hasil = 1;
//   for (let i = 0; i < sira.length; i++) {
//       hasil *= sira[i];
//   }
//   return hasil;
// }
// let sira = [1, 2, 3, 4, 5];
// let cemnetice = topla(sira);
// console.log("Sıranın cəmi:", cemnetice);
// let hasilnetice = vur(sira);
// console.log("Sıranın hasilı:", hasilnetice);


// 2. Array elementlərinin içində təkrarlanan elementləri silin -------------------

// function tekrarlariSil(sira) {
//   return sira.filter((element, index) => sira.indexOf(element) === index);
// }

// let sira = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// Tekrarlanan elementləri sil
// let yeniSira = tekrarlariSil(sira);
// console.log("Tekrarlanan elementlər silinmiş sıra:", yeniSira);


// 3. Array elementlərində ədəd olmayan elementləri silin. ---------------------------

// function ededOlmayanlariSil(array) {
//   return array.filter(item => typeof item === 'number');
// }

// let array = [1, "iki", 3, "dörd", 5, "altı"];

// let yeniarray = ededOlmayanlariSil(array);
// console.log("Sayı olmayan saylar silinmiş array:", yeniarray);


// 4. Sözü tərsinə çevirən funksiya yaradın. -------------------

// function ededOlmayanlariSil(sira) {
//   return sira.filter(element => typeof element === 'number' && !isNaN(element));
// }

// let sira = [1, 2, "söz", 3, "JavaScript", 4, 5];

// let yeniSira = ededOlmayanlariSil(sira);
// console.log("Ədəd olmayan elementlər silinmiş sıra:", yeniSira);


// 5. Cümləni tərsinə çevirən funksiya. ----------------------

// function cumleyiTersineCevir(cumle) {
//     let sozler = cumle.split(' ');
    
//     let tersCumle = sozler.reverse().join(' ');

//     return tersCumle;
// }

// let cumle = "JavaScript öyrənmək əlverişli və maraqlıdır";

// let tersCumle = cumleyiTersineCevir(cumle);
// console.log("Cümlenin tersi:", tersCumle);


// 6. Daxil edilmiş ədədi sözlə yazan funskiya (Məs→ input :1, output : Bir )  -----------------------------------------

// function edediSozleYaz(eded) {
//   let metinler = ["Sıfır", "Bir", "İki", "Üç", "Dörd", "Beş", "Altı", "Yeddi", "Səkkiz", "Doqquz"];
//   return metinler[eded];
// }

// let eded = 1;

// let metin = edediSozleYaz(eded);
// console.log("Girilən ədəd: ", eded);
// console.log("Yazılışı: ", metin);

// 7. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın -------------------------------

// function tamEdedYoxla(eded) {
//   if (eded % 1 === 0) {
//       return true; // Tam sayıdır
//   } else {
//       return false; // Tam sayı deyil
//   }
// }

// let eded = 7;

// let tamSayiMi = tamEdedYoxla(eded);
// if (tamSayiMi) {
//   console.log(eded + " bir tam sayıdır.");
// } else {
//   console.log(eded + " bir tam sayı deyildir.");
// }
 


// 8. Verilmiş cümlədə sözlərin sayını tapın ---------------------------------------------

// function cumledekiSozlerinSayiniTap(cumle) {
//   let sozler = cumle.split(" ");
//   return sozler.length;
// }

// let cumle = "JavaScript öyrənmək əlverişli və maraqlıdır";

// let sozlerinSayi = cumledekiSozlerinSayiniTap(cumle);
// console.log("Cümledeki sözlərin sayı:", sozlerinSayi);



// 9. Verilmiş cümlədə artıq boşluq simvollarını silin----------------------------------------

// function artiqBosluqlariSil(cumle) {
//   return cumle.replace(/\s+/g, ' ').trim();
// }

// let cumle = "JavaScript   öyrənmək   əlverişli  və  maraqlıdır";

// let yeniCumle = artiqBosluqlariSil(cumle);
// console.log("Artıq boşluqlar silinmiş cümlə:", yeniCumle);



// 10. Verilmiş mətndə cümlənin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın -----------------------------------------

// function ilkSozunBasHarfiniBuyukYaz(metin) {
//   let ilkBolum = metin.split(" ")[0];
//   let kalanBolum = metin.slice(ilkBolum.length);

//   let ilkHarfBuyuk = ilkBolum.charAt(0).toUpperCase() + ilkBolum.slice(1);

//   return ilkHarfBuyuk + kalanBolum;
// }

// let metin = "javascript öyrənmək əlverişli və maraqlıdır";

// let yeniMetin = ilkSozunBasHarfiniBuyukYaz(metin);
// console.log("İlk sözün baş harfi böyük yazılmış metin:", yeniMetin);



// 11. 2 arrayın eyniliyini yoxlayın ---------------------------------

// function arrayEyniMi(array1, array2) {

//   if (array1.length !== array2.length) {
//       return false; 
//   }

//   for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//           return false; 
//       }
//   }

//   return true;
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5];

// if (arrayEyniMi(array1, array2)) {
//   console.log("Arraylar eynidir.");
// } else {
//   console.log("Arraylar eyni deyildir.");
// }



// 12. Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın ----------------------------------

// function artanSirala(array) {
//   let siralanmisArray = [];
//   for (let i = 0; i < array.length; i++) {
//       let minimum = array[i];
//       for (let j = i + 1; j < array.length; j++) {
//           if (array[j] < minimum) {
//               let temp = minimum;
//               minimum = array[j];
//               array[j] = temp;
//           }
//       }
//       siralanmisArray.push(minimum);
//   }
//   return siralanmisArray;
// }

// function azalanSirala(array) {
//   let siralanmisArray = [];
//   for (let i = 0; i < array.length; i++) {
//       let maksimum = array[i];
//       for (let j = i + 1; j < array.length; j++) {
//           if (array[j] > maksimum) {
//               let temp = maksimum;
//               maksimum = array[j];
//               array[j] = temp;
//           }
//       }
//       siralanmisArray.push(maksimum);
//   }
//   return siralanmisArray;
// }

// let sira = [4, 2, 7, 1, 5];

// let artanSiralanmisSira = artanSirala(sira);
// console.log("Artan sıra:", artanSiralanmisSira);

// let azalanSiralanmisSira = azalanSirala(sira);
// console.log("Azalan sıra:", azalanSiralanmisSira);


// 13. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin --------------------------------------



// 14. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı 2 qat hesablansın ---------------------------------

// function aylikEmekHaqqiHesabla(saatlikMaas, haftalikSaatler) {
//   let normalSaatMaasi = saatlikMaas;
//   let fazlaSaatMaasi = 2 * saatlikMaas; 

//   let normalCalismaSaati = Math.min(haftalikSaatler, 40); 
//   let fazlaCalismaSaati = Math.max(haftalikSaatler - 40, 0); 

//   let normalMaas = normalCalismaSaati * normalSaatMaasi;
//   let fazlaMaas = fazlaCalismaSaati * fazlaSaatMaasi;

//   let aylikMaas = normalMaas + fazlaMaas;

//   return aylikMaas;
// }

// let saatlikMaas = 15; 
// let haftalikSaatler = 45; 

// let aylikMaas = aylikEmekHaqqiHesabla(saatlikMaas, haftalikSaatler);
// console.log("Aylıq əmək haqqı:", aylikMaas, "AZN");


// 15. 3 rəqəmli ədədin rəqəmləri cəmini tapın --------------------------


// function ucReqemliEdedinReqemleriCeminiTap(eded) {
//   let yuzler = Math.floor(eded / 100);
//   let onlar = Math.floor((eded % 100) / 10);
//   let birler = eded % 10;

//   let cem = yuzler + onlar + birler;

//   return cem;
// }

// let eded = 456;

// let cem = ucReqemliEdedinReqemleriCeminiTap(eded);
// console.log("Üç Reqemlı ededin rəqəmlərinin cəmi:", cem);


// 16. Verilmiş 2 mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən) --------------------------------------------

// function oxsharliqEmsaliniHesabla(metin1, metin2) {
//   let sozler1 = metin1.split(" ");
//   let sozler2 = metin2.split(" ");

//   let uzunluq1 = sozler1.length;
//   let uzunluq2 = sozler2.length;

//   let minUzunluq = Math.min(uzunluq1, uzunluq2);
//   for (let i = 0; i < minUzunluq - 2; i++) {
//       if (sozler1[i] === sozler2[i] && sozler1[i + 1] === sozler2[i + 1] && sozler1[i + 2] === sozler2[i + 2]) {
//           return true; 
//       }
//   }
//   return false; 
// }

// let metin1 = "JavaScript öyrənmək əlverişli və maraqlıdır";
// let metin2 = "Python öyrənmək əlverişli və maraqlıdır";

// let oxsharliq = oxsharliqEmsaliniHesabla(metin1, metin2);
// if (oxsharliq) {
//   console.log("Verilmiş iki metin üç ardıcıl sözün eyniliyinə malikdir.");
// } else {
//   console.log("Verilmiş iki metin üç ardıcıl sözün eyniliyinə malik deyil.");
// }


// 17. Verilmiş mətndə təkrarlana sözlərin sayını tapın -----------------------------------

// function tekrarlananSozlerinSayiniTap(metin) {
//   let sozler = metin.split(" ");

//   let tekrarSayilari = {};

//   for (let soz of sozler) {
//       if (tekrarSayilari[soz]) {
//           tekrarSayilari[soz]++; 
//       } else {
//           tekrarSayilari[soz] = 1
//       }
//   }

//   let tekrarlananSayi = 0;
//   for (let soz in tekrarSayilari) {
//       if (tekrarSayilari[soz] > 1) {
//           tekrarlananSayi++;
//       }
//   }

//   return tekrarlananSayi;
// }

// let metin = "JavaScript öyrənmək və JavaScript kod yazmaq əlverişli və maraqlıdır";

// let tekrarlananSayi = tekrarlananSozlerinSayiniTap(metin);
// console.log("Metindeki tekrarlanan sozlerin sayısı:", tekrarlananSayi);





// JS TASK 3 


// 1.    Array daxilində tək yerdə duran elementləri ekrana verin ------------------------------------


// function tekYerdeDurulanElementleriTap(array) {
//   let tekYerdeDurulanlar = [];

//   for (let i = 0; i < array.length; i++) {
//       let say = array[i];
      
//       if (array.indexOf(say) === array.lastIndexOf(say)) {
//           tekYerdeDurulanlar.push(say);
//       }
//   }

//   return tekYerdeDurulanlar;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let tekYerdeDurulanlar = tekYerdeDurulanElementleriTap(array);
// console.log("Tek yerde duran elementlər:", tekYerdeDurulanlar);


// 2.    Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin ----------------------------------

// function besebolunenEdedlerinSayiniTap(array) {
//   let besebolunenSayi = 0;

//   for (let i = 0; i < array.length; i++) {
//       if (array[i] % 5 === 0) {
//           besebolunenSayi++;
//       }
//   }

//   return besebolunenSayi;
// }

// let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// let besebolunenSayi = besebolunenEdedlerinSayiniTap(array);
// console.log("arraydeki 5-ə bölünən ədədlərin sayı:", besebolunenSayi);




// 3.    Daxil olunan ədədin sadə və ya mürəkkəb olduğunu tapan proqram tərtib edin. --------------------------------------

// function sadeMi(eded) {
//   if (eded <= 1) {
//       return false;
//   }

//   if (eded <= 5) {
//       return true;
//   }

//   if (eded % 2 === 0) {
//       return false;
//   }

//   for (let i = 3; i <= Math.sqrt(eded); i += 2) {
//       if (eded % i === 0) {
//           return false; 
//       }
//   }

//   return true; 
// }

// let eded = parseInt(prompt("Ədədi daxil edin:"));

// if (sadeMi(eded)) {
//   console.log(eded + " sade bir sayıdır.");
// } else {
//   console.log(eded + " mürəkkəb bir sayıdır.");
// }


// 4.    Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın. -----------------------------------

// function yediyebolunenSonuncuEdediTap(array) {
//   let sonuncuYediyebolunen = null;

//   for (let i = array.length - 1; i >= 0; i--) {
//       if (array[i] % 7 === 0) {
//           sonuncuYediyebolunen = array[i];
//           break;
//       }
//   }

//   return sonuncuYediyebolunen;
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let sonuncuYediyebolunen = yediyebolunenSonuncuEdediTap(array);
// if (sonuncuYediyebolunen !== null) {
//   console.log("arraydeki 7-ə bölünən sonuncu ədəd:", sonuncuYediyebolunen);
// } else {
//   console.log("arrayde 7-ə bölünən heç bir ədəd tapılmadı.");
// }



// 5.    Array elementləri daxilində ən böyük və ən kiçik elementləri ekrana çıxaran proqram tamin edin ----------------------------

// function enBoyukVeEnKicikElementleriTap(array) {
//   let enBoyuk = array[0]; 
//   let enKicik = array[0]; 

//   for (let i = 1; i < array.length; i++) {
//       if (array[i] > enBoyuk) {
//           enBoyuk = array[i]; 
//       }
//       if (array[i] < enKicik) {
//           enKicik = array[i]; 
//       }
//   }

//   return [enBoyuk, enKicik]; 
// }

// let array = [7, 10, 2, 5, 8, 3, 6, 1, 9, 4];

// let [enBoyuk, enKicik] = enBoyukVeEnKicikElementleriTap(array);
// console.log("arraydeki en büyük say:", enBoyuk);
// console.log("arraydeki en küçük say:", enKicik);




// 6.    Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin -------------------------------

// function enBoyukVeEnKicikYeriDegis(array) {
//   let enBoyukIndex = 0; 
//   let enKicikIndex = 0; 

//   for (let i = 1; i < array.length; i++) {
//       if (array[i] > array[enBoyukIndex]) {
//           enBoyukIndex = i; 
//       }
//       if (array[i] < array[enKicikIndex]) {
//           enKicikIndex = i;
//       }
//   }

//   let gecici = array[enBoyukIndex];
//   array[enBoyukIndex] = array[enKicikIndex];
//   array[enKicikIndex] = gecici;

//   return array;
// }

// let array = [7, 10, 2, 5, 8, 3, 6, 1, 9, 4];

// let yeniarray = enBoyukVeEnKicikYeriDegis(array);
// console.log("Yerleri değiştirilmiş array:", yeniarray);




// 7.    Daxil edilən ədədin bütün mümkün bölənlərini ekrana çıxaran proqram tərtib edin --------------------------------

// function butunBolenleriCixar(eded) {
//   let bolenler = [];

//   for (let i = 1; i <= eded / 2; i++) {
//       if (eded % i === 0) {
//           bolenler.push(i); 
//       }
//   }

//   bolenler.push(eded);

//   return bolenler; 
// }

// let eded = parseInt(prompt("Ədədi daxil edin:"));

// let bolenler = butunBolenleriCixar(eded);
// console.log(eded + " ədədin bütün bölənləri:", bolenler);



// 8.    Verilmiş array daxilində ixtiyari ədədi ekrana çıxaran proqram tərtib edin-----------------------------------

// function ixciariEdediCixar(array, indeks) {
//   if (indeks >= 0 && indeks < array.length) {
//       console.log("İxtiyari ədəd:", array[indeks]);
//   } else {
//       console.log("Daxil edilmiş indeks arraynin bölgələri aralığında deyil.");
//   }
// }

// let array = [5, 8, 12, 15, 20];

// let istenilenIndeks = parseInt(prompt("İstifadəçidən indeksi daxil edin:"));
// ixciariEdediCixar(array, istenilenIndeks);


// 9.    1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin-------------------------------

// function tekEdedleriCixar() {
//   console.log("Teklik 1 olan ədədlər:");
//   for (let i = 1; i <= 100; i++) {
//       if (i % 2 === 1 && i.toString().indexOf('1') !== -1) {
//           console.log(i);
//       }
//   }
// }

// tekEdedleriCixar();


// 10.    Daxil olunmuş ifadənin polindrom olduğunu yoxlayın.   (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)------------------------------

// function polindromYoxla(ifade) {
//   let temizIfade = ifade.toLowerCase().replace(/\s/g, '');
  
//   let tersIfade = temizIfade.split('').reverse().join('');

//   if (temizIfade === tersIfade) {
//       return true; // Palindromdur
//   } else {
//       return false; // Palindrom deyil
//   }
// }

// let ifade = prompt("Palindrom olup olmadığını yoxlamaq ucun bir ifade girin:");

// if (polindromYoxla(ifade)) {
//   console.log(ifade + " bir palindromdur.");
// } else {
//   console.log(ifade + " bir palindrom deyildir.");
// }


// 11.    Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)------------------------

// function anaqramYoxla(soz1, soz2) {
//   let temizsoz1 = soz1.toLowerCase().replace(/\s/g, '');
//   let temizsoz2 = soz2.toLowerCase().replace(/\s/g, '');

//   if (temizsoz1.length !== temizsoz2.length) {
//       return false;
//   }

//   const harfSayilari1 = {};
//   const harfSayilari2 = {};

//   for (let harf of temizsoz1) {
//       harfSayilari1[harf] = (harfSayilari1[harf] || 0) + 1;
//   }

//   for (let harf of temizsoz2) {
//       harfSayilari2[harf] = (harfSayilari2[harf] || 0) + 1;
//   }

//   for (let harf in harfSayilari1) {
//       if (harfSayilari1[harf] !== harfSayilari2[harf]) {
//           return false;
//       }
//   }

//   return true; 
// }

// let soz1 = prompt("İlk sozu girin:");
// let soz2 = prompt("İkinci sozu girin:");


// if (anaqramYoxla(soz1, soz2)) {
//   console.log(soz1 + " ve " + soz2 + " birbirinin anagramıdır.");
// } else {
//   console.log(soz1 + " ve " + soz2 + " birbirinin anagramı deyildir.");
// }




// 12.    Daxil olunmuş iki eyni uzunluqlu arrayin eyni yerdə duran elementlərinin hasilindən ibarət yeni array yaradın. Məsələn [2,5] [3,6] yeni array [6,30]---------------------------------

// function yeniArrayYarat(array1, array2) {
//   if (array1.length !== array2.length) {
//       return [];
//   }

//   let yeniarray = [];
//   for (let i = 0; i < array1.length; i++) {
//       yeniarray.push(array1[i] * array2[i]); 
//   }
//   return yeniarray;
// }

// let array1 = [2, 5];
// let array2 = [3, 6];

// let yeniarray = yeniArrayYarat(array1, array2);
// console.log("Yeni array:", yeniarray);



// 13.    Daxil olunmuş mətndə saitləri silən proqram yaradın----------------------

// function saitleriSil(metn) {
//   const saitler = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
  
//   return metn.replace(saitler, '');
// }

// let metin = "MilliSoft JavaScript Dersleri.";

// let yeniMetin = saitleriSil(metin);
// console.log("Sesli harfler silinmiş yeni metin:", yeniMetin);



// 14.    İstifadəçi daxil edən ədəd sayda ixtiyarı simvoldan ibarət string ifadə yaradın (məsələn input:5   output: qeg8d)---------------------

// function ixtiyariNumuneYarat(uzunluq) {
//   let Numune = '';
//   const karakterler = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   for (let i = 0; i < uzunluq; i++) {
//       Numune += karakterler.charAt(Math.floor(Math.random() * karakterler.length));
//   }

//   return Numune;
// }

// let uzunluq = parseInt(prompt("İstifadəçi daxil etdiyi ədəd sayda ixtiyari simvoldan bir numune yaranacaq. Uzunluğu daxil edin:"));

// let ixtiyariNumune = ixtiyariNumuneYarat(uzunluq);
// console.log("Yaranan ixtiyari Numune:", ixtiyariNumune);


// 15.    Ədədlərdən ibarət arrayin elementlərinin ədədi ortasını tapın --------------------

// function ədədOrtasınıTap(array) {
//   let cəm = array.reduce((a, b) => a + b, 0); 
//   let ədədOrtası = cəm / array.length; 
//   return ədədOrtası; 
// }

// let array = [1, 2, 3, 4, 5];

// let orta = ədədOrtasınıTap(array);
// console.log("Array-in ədədi ortası:", orta);


// 16.    Daxil olunmuş sözdə neçə sait və samit olduğunu tapın--------------------------

// function saitVeSamitSayiTap(soz) {
//   const saitler = 'aeiou';
//   soz = soz.toLowerCase();
  
//   let saitSayi = 0;
//   let samitSayi = 0;

//   for (let harf of soz) {
//       if (saitler.includes(harf)) {
//           saitSayi++;
//       } else if (harf >= 'a' && harf <= 'z') {
//           samitSayi++;
//       }
//   }

//   return { saitSayi, samitSayi };
// }

// let soz = prompt("Sait və samit hərflərin sayını tapmaq üçün bir söz daxil edin:");

// let { saitSayi, samitSayi } = saitVeSamitSayiTap(soz);
// console.log("Sait hərflərin sayı:", saitSayi);
// console.log("Samit hərflərin sayı:", samitSayi);




// 17.    Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)---------------------

// function mukemmelEdedYoxla(eded) {
//   let cem = 0;

//   for (let i = 1; i < eded; i++) {
//       if (eded % i === 0) {
//           cem += i;
//       }
//   }

//   if (cem === eded) {
//       return true; // Mükəmməl ədəddir
//   } else {
//       return false; // Mükəmməl ədəd deyil
//   }
// }

// let eded = parseInt(prompt("Mükəmməl ədəd olub olmadığını yoxlamaq üçün bir ədəd daxil edin:"));

// if (mukemmelEdedYoxla(eded)) {
//   console.log(eded + " mükəmməl ədəddir.");
// } else {
//   console.log(eded + " mükəmməl ədəd deyil.");
// }


// 18.    Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın----------------------

// function reqemlerinCemi(eded) {
//   let cem = 0;
//   while (eded > 0) {
//       cem += eded % 10;
//       eded = Math.floor(eded / 10);
//   }
//   return cem;
// }

// let eded = parseInt(prompt("Rəqəmlərin cəmini tapmaq üçün bir ədəd daxil edin:"));

// let cem = reqemlerinCemi(eded);
// console.log("Rəqəmlərin cəmi:", cem);



// 19.    Substring metodunun işini yerinə yetirən funksiya yaradın--------------------

// function substringMetodu(metn, baslamaIndexi, bitisIndexi) {
//   if (baslamaIndexi < 0) {
//       baslamaIndexi = 0;
//   }
//   if (bitisIndexi > metn.length) {
//       bitisIndexi = metn.length;
//   }
//   if (baslamaIndexi > bitisIndexi) {
//       [baslamaIndexi, bitisIndexi] = [bitisIndexi, baslamaIndexi];
//   }
//   return metn.slice(baslamaIndexi, bitisIndexi);
// }

// let metin = "Bu bir numune metindir.";
// let baslamaIndexi = 4;
// let bitisIndexi = 11;

// let netice = substringMetodu(metin, baslamaIndexi, bitisIndexi);
// console.log("Substring netice:", netice);



// 20.    indexOf metodunun işini yerinə yetirən funksiya yaradın-----------------------------


// function substringYarat(metin, baslangic, bitis) {
//   if (baslangic < 0) {
//       baslangic = metin.length + baslangic;
//   }
//   if (bitis === undefined || bitis > metin.length) {
//       bitis = metin.length;
//   }
//   let altArray = '';
//   for (let i = baslangic; i < bitis; i++) {
//       altArray += metin[i];
//   }
//   return altArray;
// }

// let numuneMetin = "Bu bir numune metindir.";
// let altArray = substringYarat(numuneMetin, 3, 10);
// console.log("Alt Array:", altArray); 
