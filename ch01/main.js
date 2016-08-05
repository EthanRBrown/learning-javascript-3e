$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    /* to draw a single circle:
        var c = Shape.Circle(200, 200, 50);
        c.fillColor = 'green';
    */

    /* to draw 64 circles, evenly spaced:
        var c;
        for(var x=25; x<400; x+=50) {
            for(var y=25; y<400; y+=50) {
                c = Shape.Circle(x, y, 20);
                c.fillColor = 'green';
            }
        }
    */

    var tool = new Tool();

    // draw a circle on every mouse click
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };

    // draw a big circle in the middle with the text "hello world"
    // (with respect to brian kernighan)
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();
});
