function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function (o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};

function run() {
  var clickHandler = function (item) {
    console.log('fired: ' + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  console.log(click.handlers);
  click.fire('event #1');
  click.unsubscribe(clickHandler);
  console.log(click.handlers);
  click.fire('event #2');
  click.subscribe(clickHandler);
  console.log(click.handlers);
  click.fire('event #3');
}

// observer pattern의 주요 목적은 결합도를 낮추는 것

// 신문사 + 구독자 = 옵저버 패턴
// 신문사 : 주제(subject)
// 구독자 : 구독자(observer)
