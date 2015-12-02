$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    $("canvas").css({"width": document.body.clientWidth, "height": document.body.clientHeight});
    // if(window.dancers.length > 0){
    //   for(var i=0; i<window.dancers.length; i++){
    //     $(window.dancers[i].$node).attr('id', i);
    //   }
    // }

    /////////////////////////////////////////////////////////////////////////
    var mOvE = function(id){
      // var id2 = String(id);
      // var id3 = "#" + id2
      var blinky = $('#'+id);
      // console.log(blinky);
      var direct = Math.random() * 100;
      var moveLeft = true;
      var moveTop = true;      

        if (direct > 50 && direct <=75) {
          blinky.animate({ 
            top: "-=250px",
          }, 2000 );
          mOvE(id)
        } else if(direct <= 50 && direct >= 25) {          
          blinky.animate({ 
            top: "+=250px",
          }, 2000 );
          mOvE(id)
        } else if(direct < 25){
          blinky.animate({ 
            left: "+=250px",
          }, 2000 );
          mOvE(id)
        } else if(direct > 75){
          blinky.animate({ 
            left: "-=250px",
          }, 2000 );
          mOvE(id)
        }
    }
    
    ///////////////////////////////////////////////////////////////////////////
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make

      var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer)
    $('body').append(dancer.$node);

    // $(dancer).attr('id', dancers.length);
    $(dancer.$node).attr('id', dancers.length);
    // console.log(dancer.id);
    mOvE(dancers.length);
  });

  $(".lineUp").on("click", function(event) {
    for(var i = 0; i < window.dancers.length; i++) { 
      window.dancers[i].setPosition(500,100 + i * 10)
    }  
  });
});

