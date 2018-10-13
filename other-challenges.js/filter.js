var people = [
    { name: "Candice", age: 25 },
    { name: "Tammy", age: 30 },
    { name: "Allen", age: 49 },
    { name: "Nettie", age: 21 },
    { name: "Stuart", age: 17 },
    { name: "Bill", age: 19 }
  ];
  
  var ofDrinkingAge = people.filter(
    function(person){
    return person.age >= 21 && person.name.toUpperCase().indexOf('T') > -1
    if (person.name.toUpperCase().indexOf('T')> -1){
      return person.age >= 21
    }
    
  });
  console.log (ofDrinkingAge);
  
  
  
  var numbers = [1, 60, 112, 123, 100, 99, 73, ]
  var evens = numbers.filter(
    function(number){
      if (number < 100) 
      return number % 2 === 0;
    });
  console.log(evens);