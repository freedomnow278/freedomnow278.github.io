$(document).ready(function(){  
    // !!!!!!!!!*********Украина******!!!!!!!!!!! 
   if( GEO == 'RU') { 



   }

  // !!!!!!*******Казахстан******!!!!!!!!!!
  if( GEO == 'KZ') { 
    var product_id = "4545";
        country = "Казахстану"
        price = "17990";
        oldPrice = "35980";
        currency = " " + "тг";
        delivery = "Казпочтой";
        postOffice = "Казпочты";
        companyDatafooter = "ООО «Твмарт-алм» г. Алматы, Санаторная улица, 44 <br> ОГРН 1115233004237 <br> ИНН 503003204058";

        // Имена
        name1 = "Азамат Жуленов";
        name2 = "Закир Найманбаев";
        name3 = "Нурислам";
        name4 = "Медина";
        name5 = "Арсен";
        name6 = "Каусар";
        name7 = "София";
        name8 = "Рамзан Кулебов";
        name9 = "Ерасыл";
        name10 = "Адия";

    
        // Города
        city1 = "г.Алматы́";
        city2 = "г.Астана";
        city3 = "г.Караганда";
        city4 = "г.Петропавловск";
        city5 = "г.Салехард";
        city6 = "г.Уссурийск";
        city7 = "г.Актобе";
        city8 = "г.Уральск	";
    // Имена 
   
    $('.photo').attr("src", "comm-ava1.jpg")
    $('.photo1').attr("src", "comm-ava2.jpg")
    $('.photo2').attr("src", "comm-ava4.jpg")



    $('.name1').html( name1 );
    $('.name2').html( name2 );
    $('.name3').html( name3 );
    $('.name4').html( name4 );
    $('.name5').html( name5 );
    $('.name6').html( name6 );
    $('.name7').html( name7 );
    $('.name8').html( name8 );
    $('.name9').html( name9 );
    $('.name10').html( name10 );
    // Города
    $('.city1').html( city1 );
    $('.city2').html( city2 );
    $('.city3').html( city3 );
    $('.city4').html( city4 );
    $('.city5').html( city5 );
    $('.city6').html( city6 );
    $('.city7').html( city7 );
    $('.city8').html( city8 );

    $('.product_id').val( product_id );
    $('.multi-country').html( country )
    $('.price_land_s1').html( price);
    $('.price_land_s2').html( oldPrice  ); 
    $('.price_land_curr').html( currency );
    $('.multi-delivery').html( delivery );
    $('.multi-postOffice').html( postOffice );
    $('.multi-info-company').html( companyDatafooter );

   
 
  
  }
  // !!!!!!!!*********Киргистан********!!!!!!!!!!!
 // if( GEO == 'KG') { 
 //    var product_id = "2077";
 //        country = "Киргистану"
 //        price = "1590";
 //        oldPrice = "3180";
 //        currency = " " + "сом";
 //        delivery = "Киргизпочтой";
 //        postOffice = "Киргизпочтой";
 //        companyDatafooter = "ООО «Твмарт-алм» г. Алматы, Санаторная улица, 44 <br> ОГРН 1115233004237 <br> ИНН 503003204058";

 //       // Имена
 //        name1 = "Азамат Жуленов";
 //        name2 = "Закир Найманбаев";
 //        name3 = "Нурислам";
 //        name4 = "Медина";
 //        name5 = "Арсен";
 //        name6 = "Каусар";
 //        name7 = "София";
 //        name8 = "Рамзан Кулебов";
 //        name9 = "Ерасыл";
 //        name10 = "Адия";

    
 //        // Города
 //        city1 = "г.Алматы́";
 //        city2 = "г.Астана";
 //        city3 = "г.Караганда";
 //        city4 = "г.Петропавловск";
 //        city5 = "г.Салехард";
 //        city6 = "г.Уссурийск";
 //        city7 = "г.Актобе";
 //        city8 = "г.Уральск  ";
 //    // Имена 
   
 //    $('.photo').attr("src", "rev-111.jpg")
 //    $('.photo1').attr("src", "rev-22.jpg")
 //    $('.photo2').attr("src", "rev-33.jpg")
 //    // Имена 
 //    $('.name1').html( name1 );
 //    $('.name2').html( name2 );
 //    $('.name3').html( name3 );
 //    $('.name4').html( name4 );
 //    $('.name5').html( name5 );
 //    $('.name6').html( name6 );
 //    $('.name7').html( name7 );
 //    $('.name8').html( name8 );
 //    $('.name9').html( name9 );
 //    $('.name10').html( name10 );
 //    // Города
 //    $('.city1').html( city1 );
 //    $('.city2').html( city2 );
 //    $('.city3').html( city3 );
 //    $('.city4').html( city4 );
 //    $('.city5').html( city5 );
 //    $('.city6').html( city6 );
 //    $('.city7').html( city7 );
 //    $('.city8').html( city8 );

 //    $('.product_id').val( product_id );
 //    $('.multi-country').html( country )
 //    $('.multi-price').html( price + currency );
 //    $('.multi-old-price').html( oldPrice + currency );
 //    $('.multi-delivery').html( delivery );
 //    $('.multi-postOffice').html( postOffice );
 //    $('.multi-info-company').html( companyDatafooter );

 //   $(".input-phone").mask("+9(000) 000-00000");
 //  }
  // !!!!!!!!*********Киргистан********!!!!!!!!!!!

});