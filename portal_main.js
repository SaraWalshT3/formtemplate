$(document).ready(function() {
  $('#getdata').click(function() {
    var showData = $('#show-data');

      $.getJSON("http://www.vstarkey.net/ajax_files/pets.json", function(myData) { //get the data and process it
        console.log(myData);
/*
        var myData = myData.items.map(function (item) {//JSON.parse("controls.json");
          return item.value;

      }); // end var */
    }); // end getJSON
  }); // end click
}); // end ready














    /*
    $("#controlchoice").click(function() { // click was for button, mult choice may need something else


        $(myData, function() {
          $("input[type=controldesc]").val(this.desc);
        });

      });  //get function

  }); //click function

//}); //ready
*/
