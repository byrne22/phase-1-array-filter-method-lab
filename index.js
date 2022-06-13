// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, string){
    return drivers.filter(function(drivers){
        return drivers.toLowerCase()===string.toLowerCase()

})
}
   
console.log(findMatching(drivers, "Sarah"))

function fuzzyMatch(drivers, string){
    return drivers.filter(function(drivers){
        return drivers.toLowerCase().indexOf(string.toLowerCase())=== 0
    })
}
console.log(fuzzyMatch(drivers, 'b'))
const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
 


function matchName(drivers1,string){
    return drivers1.filter(function(drivers1){
        if (drivers1.name === string)
        return drivers1.name

    })
}
console.log(matchName(drivers1, 'Bobby'))// Code your solution here
