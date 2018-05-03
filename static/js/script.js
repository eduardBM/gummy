jQuery(document).ready(function($){

//REPEAT ITEMS

      $.ajax({
        type: "GET",
        url: "http://localhost:3000/items.json",
        data: "json",
        success: function(data) {
        var item = $(".product-template").html();

          for (var i = 0; i < data.length; i++) {
            data[i]
            $(".items").append(item.replace("{{name}}",data[i].name).replace("{{price}}",data[i].price));
          }
        },
        error: function() {

        }
      });

//./REPEAT ITEMS

// JWT

//login function

//var loggedin=0; // for test if user is logged in

    $('#submitlogin').click(function() {
      $.ajax({
        type: "POST",
        url: "http://localhost:5000/auth",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          username: $('#usr').val(),
          password: $('#pwd').val()
        }),
        success: function(data) {
          localStorage.token = data.access_token;
          alert('Got a token from the server! Token: ' + data.access_token);;
        },
        error: function() {
          alert("Login Failed");
          loggedin=0;
        }
      });
    });

 //logout function

    $('#logout').click(function() {
      localStorage.clear();
    });

 //register function

     $('#submitregister').click(function() {
      $.ajax({
        type: "POST",
        url: "http://localhost:5000/register",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
          username: $('#registerusr').val(),
          password: $('#registerpwd').val()
        }),
        success: function(data) {
          alert(data.message);
        },
        error: function() {
          alert(data.message);
        }
      });
    });


//./JWT

  //Replace DIV

// new Vue({
//   el: '#seemore',
//   methods: {
//     myFunction: function (msg) {
//       alert('HI')
//     }
//   }
// });


//Simple Alert Function
// ./ Button stuff
});

function seemore() {
    alert("I am an alert box!");
        $("#replacediv").hide();
    }


