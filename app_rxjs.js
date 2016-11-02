var pos = 0;

// moveLeft(pos){}

var keyDown = Rx.Observable.fromEvent(document, 'keydown')
.map(e => e.keyCode)
.filter(code => code === 37)
// .mapTo(posi => console.log(posi))
.map(pos => )
.scan(pos => pos - 10, pos)

var keyUp = Rx.Observable.fromEvent(document, 'keydown')
.map(e => e.keyCode)
.filter(code => code === 39)
.scan(pos => pos + 10, pos)


Rx.Observable.merge(keyDown,keyUp)
.subscribe(pos => {
  console.log(pos);
  $('#car').css('left',pos + 'px');
})
