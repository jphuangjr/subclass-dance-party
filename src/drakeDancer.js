var DrakeDancer = function(top, left, timeBetweenSteps) {
    Dancer.apply(this, arguments);
    this.$node = $('<span class="drake"></span>');
    this.setPosition(top, left);
    setTimeout(this.move, 5000);
};
DrakeDancer.prototype = Object.create(Dancer.prototype);
DrakeDancer.prototype.constructor = DrakeDancer;

DrakeDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    this.$node.toggle();

};
BlinkyDancer.prototype.move = function() {
  $(document).ready(function() {
    
      $('#drake').animate({
      'marginLeft' : "-=30px" //moves left
      });
      // $('#moveright').click(function() {
      //     $('#drake'+id).animate({
      //     'marginLeft' : "+=30px" //moves right
      //     });
      // });
      // $('#movedown').click(function() {
      //     $('#drake'+id).animate({
      //     'marginTop' : "+=30px" //moves down
      //     });
      // });
      // $('#moveup').click(function() {
      //     $('#drake'+id).animate({
      //     'marginTop' : "-=30px" //moves up
      //     });
      // });
  });
}

