const Artem = 'Artem';

String.prototype.sayHello = function (name) {
  console.log(`${name} Say Hello`);
};

Artem.sayHello(Artem);

String.prototype.__proto__ = Object.create(null, {
  hi: {
    value: function (name) {
      console.log(`Hi, ${name}`);
    },
  },
});

Artem.hi(Artem);

console.dir(String.prototype);
console.dir(Number.prototype);
console.dir(Boolean.prototype);
