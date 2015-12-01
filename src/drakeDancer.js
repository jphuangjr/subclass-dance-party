var DrakeDancer = function(top, left, timeBetweenSteps) {
    Dancer.apply(this, arguments);
    this.$node = $('<span class="drake"></span>');
    this.setPosition(top, left);
};
DrakeDancer.prototype = Object.create(Dancer.prototype);
DrakeDancer.prototype.constructor = DrakeDancer;

DrakeDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    this.$node.toggle();

};
