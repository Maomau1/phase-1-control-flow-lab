// function scuberGreetingForFeet(distance){
  // Write your code here!
  /*describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

    it('charges 20 dollars for a distance between 400 and 2000 feet', function () {
      expect(scuberGreetingForFeet(1500)).to.equal('That will be twenty bucks.');
    });

    it('charges 30 dollars for a distance over 2000 feet', function () {
      expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
    });

    it('does not allow rides over 2500 feet', function () {
      expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
    });
  });*/
//   if (distance <= 400) {
//     return 'This one is on me!'
//   }
//   else if (distance > 400 && distance <=2000) {
//     return 'That will be twenty bucks.'
//   }
//   else if (distance >2000 && distance <= 2500) {
//     return 'I will gladly take your thirty bucks.'
//   }
//   else {
//     return `No can do.`
//   }
// }

// function ternaryCheckCity(city){
//   // Write your code here!
//   const isNyc = city == 'NYC'? 'Ok, sounds good.': 'No go.';
//   return isNyc;
// }

// function switchOnCharmFromTip(tip){
//   // Write your code here!
//   switch (tip) {
//     case `generous`:
//       return `Thank you so much.`
//     case `not as generous`:
//       return `Thank you.`
//     default:
//       return `Bye.`;
//   }
// }
function scuberGreetingForFeet(distance){
  if (distance<=400){
    return 'This one is on me!'
  }
  else if (distance>400 & distance <=2000){
    return 'That will be twenty bucks.'
  }
}