var Dancer = function(top, left, timeBetweenSteps){
    this.timeBetweenSteps = timeBetweenSteps;
    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.step();
    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
    this.setPosition(top, left);
};


Dancer.prototype.step = function(){
    //var context = this;
    var setTimeFunc = function(){
        this.step();
    }
    //setTimeout(setTimeFunc, context.timeBetweenSteps);
    setTimeout(setTimeFunc.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
    
    var styleSettings = {
        top: top,
        left: left
    };
    this.$node.css(styleSettings);
};

///////////////////////////////////////////////////////////////////////////////////





