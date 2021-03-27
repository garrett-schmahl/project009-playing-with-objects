var users = [
  {
      name: "Michael",
      age: 37
  },
  {
      name: "John",
      age: 30
  },
  {
      name: "David",
      age: 27
  }
]


//How would you print/log John's age?

function johnAge(users){
      console.log("John's age is "+users[1].age)
}
johnAge(users)


//fucking around
for (var i in users){ //this = for (var i = 0; i<users.length; i++) !!!!!!!
  console.log(users[i].age)
  console.log(i)
}

//How would you print/log the name of the first object?

function printFirst(users){
  console.log(users[0].name)
}
printFirst(users)

//How would you print/log the name and age of each user using a for loop?

function nameAndAge(users){
  for (var i in users){
    console.log(users[i].name+" - "+users[i].age)
  }
}
nameAndAge(users)