/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

var tmpl_2 =  '<li id="1" class="current">' +
                ' <h3 class="domanda">inglese</h3>' +
         '<h3 class="solution">tedesco</h3> ' +  
              '</li>';                       
    
               
  var correct = 0;            
var i = 0;

$(document).ready(function(){
     
    //while (i < data.length){
        $('.solution').hide();                                                      // volevo fare tutto dentro 
        var add_to_ul = tmpl_2.replace("inglese", data[i].word_en)
                            .replace("tedesco", data[i].word_de);
        $(".cards").append(add_to_ul);
        $('.solution').hide();
        $('.current').on('click', function(){
            i++;
        $('.domanda').hide();
        $('.solution').show();
    })
    //        var add_to_ul = tmpl_2.replace("inglese", data[i].word_en)
    //                            .replace("tedesco", data[i].word_de);
    //        $(".cards").append(add_to_ul);
    
    //}
     $('.options').on('click', function(){
        if (("this .btn opt-correct")){
            correct++;
        }
     })
});







