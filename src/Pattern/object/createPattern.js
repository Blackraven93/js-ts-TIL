// name space pattern
// 5.1 네임스페이스

function Parent() {}
function Child() {}

const someValue = 1;

const module = {};

module.data = {
  a: 1,
  b: 2,
};

const module2 = {};

const MYAPP = {};
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// 변수
MYAPP.someValue = 1;
MYAPP.modules = {};

MYAPP.modules.module = {};
MYAPP.modules.module.data = { a: 1, b: 2 };
MYAPP.modules.module2 = {};

// 개선안
// const MYAPP2 = MYAPP2 || {};

MYAPP.namespace = function (ns_string) {
  let parts = ns_string.split('.'),
    parent = MYAPP;

  if (parts[0] === 'MYAPP') {
    parts = parts.slice(1);
  }

  for (let i = 0; i < parts.length; i++) {
    if (typeof parent[parts[i]] === 'undefined') {
      parent[parts[i]] = {};
    }

    parent = parent[parts[i]];
  }

  return parent;
};

const module3 = MYAPP.namespace('MYAPP.modules.module2');
console.log(module3 === MYAPP.modules.module2);

console.log(MYAPP.namespace('modules.module51'));

console.log(MYAPP.namespace('once.upon.a.time.there.was.this.long.nested'));

const myFunction = function () {
  const event = YAHOO.util.Event,
    dom = YAHOO.util.Dom;
};

const myobj = {
  myprop: 1,
  getProp: function () {
    return this.myprop;
  },
};

console.log(myobj.myprop);
console.log(myobj.getProp());

function Gadget() {
  this.name = 'iPod';
  this.stretch = function () {
    return 'iPad';
  };
  this.getName = function () {
    return this.name;
  };
}

const toy = new Gadget();
console.log(toy.name);
console.log(toy.stretch());

class Gadget2 {
  #name = 'iPod';

  get getName() {
    return this.#name;
  }
}

const toy2 = new Gadget2();
console.log(`toy2 name : ${toy2.name}`);
console.log(toy2.getName);

function Gadget3() {
  const name = 'iPod';
  this.getName = function () {
    return name;
  };
}

const toy3 = new Gadget3();

console.log(`toy3 name : ${toy3.name}`);
console.log(`toy3 getName : ${toy3.getName()}`);

function Gadget4() {
  const specs = {
    screen_width: 320,
    screen_height: 480,
    color: 'white',
  };

  this.getSpecs = function () {
    return specs;
  };
}

// 객체 리터럴에서 프라이빗 변수를 사용하는 방법

const myObject = (function () {
  const name = 'Raven';

  return {
    getName: function () {
      return name;
    },
  };
})();

console.log(myObject.getName());

Gadget.prototype = (function () {
  const browser = 'Mobile Webkit';
  return {
    getBrowser: function () {
      return browser;
    },
  };
})();

const toy4 = new Gadget();

console.log(toy4.getName());
console.log(toy4.getBrowser());

// 비공개 함수를 공개 메서드로 노출시키는 방법(노출 패턴)
Object.freeze(myObject);

const myArray = (function () {
  const astr = '[object Array]',
    toString = Object.prototype.toString;

  function isArray(a) {
    return toString.call(a) === astr;
  }

  function indexOf(haystack, needle) {
    return haystack.find((e, i) => {
      if (e === needle) {
        return i;
      }
    });
  }

  return {
    isArray,
    indexOf,
    inArray: indexOf,
  };
})();

console.log(myArray.isArray([1, 2, 3, 4]));
console.log(myArray.isArray({ 0: 1 }));
console.log(myArray.indexOf(['a', 'b', 'z'], 'z'));
myArray.indexOf = null;
console.log(myArray.inArray(['a', 'b', 'c'], 'c'));
