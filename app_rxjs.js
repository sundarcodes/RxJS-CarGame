function moveLeft(pos) {
  return Object.assign({}, {left:parseInt(pos.left)-10, top:pos.top});
}

function moveRight(pos) {
  return Object.assign({}, {left:parseInt(pos.left)+10, top:pos.top});
}

var keyDown = Rx.Observable.fromEvent(document, 'keydown')
.map(e => e.keyCode)
.filter(code => code === 37)
.mapTo((pos) => moveLeft(pos));


var keyUp = Rx.Observable.fromEvent(document, 'keydown')
.map(e => e.keyCode)
.filter(code => code === 39)
.mapTo((pos) => moveRight(pos));


Rx.Observable.merge(keyDown,keyUp)
.scan((pos,move) => move(pos), {left:10,top:5})
.subscribe(pos => {
  $('#car').css('left',pos.left + 'px');
})
