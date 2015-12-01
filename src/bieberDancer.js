var BieberDancer = function(top, left, timeBetweenSteps) {
    Dancer.apply(this, arguments);
    this.$node = $('<span class="bieber"></span>');
    this.setPosition(top, left);

}; 
BieberDancer.prototype = Object.create(Dancer.prototype); 
BieberDancer.prototype.constructor = BieberDancer;

BieberDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    this.$node.toggle();

};
