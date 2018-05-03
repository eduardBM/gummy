jQuery(document).ready(function($){

//REPEAT ITEMS

      $.ajax({
        type: "GET",
        url: "items",
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
          alert('Got a token from the server! Token: ' + data.access_token);
          $('#loginbutton').hide();
          $('#logoutbutton').show();
            //document.getElementById('loginbutton').style.visibility = 'hidden';
            //document.getElementById('loginbutton').style.display = 'none';
            //$('#loginbutton').attr("disabled", false);


        },
        error: function() {
          alert("Login Failed");
        }
      });
    });

 //logout function

    $('#logout').click(function() {
      localStorage.clear();
      ("#loginbutton").show();
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

    //IsLoggedin

  //Replace DIV

  });

function seemore() {
    $("#replacediv").hide();

//Need to add product template
    }

// ./ Button stuff

