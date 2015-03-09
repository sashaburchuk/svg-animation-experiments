TweenMax.to(".red", 2, {x:600, opacity:1, ease:Bounce.easout});
TweenMax.to(".blue", 1, {x:600, opacity:1, delay:2, ease:Bounce});
TweenMax.to(".green", 0.5, {x:600, opacity:1, delay:3, ease:Bounce});
TweenMax.to(".yellow", 1.5, {x:600, opacity:1, delay:3.5, ease:Bounce});
TweenMax.from(".circle", 1.5, {opacity:0, delay:5, onComplete:complete})


// testing bespoke functions
function complete() {
  alert("all done ;)")
}
