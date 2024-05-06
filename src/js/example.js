$(document).ready(function() {

    var container = $('#container');

    // fade in effect
    container.css({
        opacity: 0
    });
    container.delay(500).animate({
        opacity: 1
    }, 500);

    container.theta_carousel({
        "filter": ".ex-item",
        "selectedIndex": 6,
        "distance": 125,
        "designedForWidth": 1920,
        "designedForHeight": 925,
        "scaleZ": 0.86,
        "distanceInFallbackMode": 250,
        "responsive": {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 5
			}
        },
        "path": {
            "settings": {
                "shiftY": 201,
                "shiftZ": 440,
                "rotationAngleZY": -17,
                "wideness": 521
            },
            "type": "parabola"
        },
        "shadow": true,
        "shadowBlurRadius": 62,
        "shadowSpreadRadius": 2,
        "fadeAway": true,
        "fadeAwayBezierPoints": {
            "p1": {
                "x": 0,
                "y": 100
            },
            "p2": {
                "x": 97,
                "y": 97
            },
            "p3": {
                "x": 97,
                "y": 98
            },
            "p4": {
                "x": 100,
                "y": 0
            }
        },
        "popoutSelected": true,
        "popoutSelectedShiftY": -54,
        "popoutSelectedShiftZ": 155
    });
});