const Dragon = require('./dragon');

const fooey = new Dragon({
  birthdate: new Date(), 
  nickname: 'Fooey'
});
const baloo = new Dragon({
  nickname: 'Baloo',
  birthdate: new Date(),
  traits: [{
    traitType: 'backgroundColor',
    traitValue: 'green'
  }]
});

const mimar = new Dragon();

setTimeout(() => {
  const gooby = new Dragon();
  console.log('Gooby', gooby);
}, 5000);

console.log('Fooey', fooey);
console.log('Baloo', baloo);
console.log('Mimar', mimar);