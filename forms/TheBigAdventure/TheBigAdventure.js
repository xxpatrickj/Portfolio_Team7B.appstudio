firstName = prompt("Type in your first name:")

firstLevel = prompt(`${firstName}, This is The Big Adventure game. Type yes to start`)

if (firstLevel == "yes") {
  alert("1 is to go North, 2 is to go south, 3 is to go West, 4 is to go East. The goal of the game is to get to all 6 rooms in the house without exceeding the boundaries.")
}

else {
  alert("Maybe next time")
}

let direction = []

  direction["North"] = 1
  
  direction["South"] = 2
  
  direction["West"] = 3
  
  direction["East"] = 4
  
foyer = prompt("This is the Foyer. This is the entrance to the house. Enter 1-4 to advance. Go the direction of the Yankees.")

if (foyer == direction["North"] || foyer == direction["South"] || foyer == direction["East"]) {

  alert("You have exceeded the boundaries")
  
} else if (foyer == direction["East"]) {
  
  alert("You have entered the Master Bedroom")
}


master = prompt("You are in the Master Bedroom. This is the largest room in the house. Enter 1-4 to advance. Leave the same direction you left the Foyer.")

if (master == direction["North"] || master == direction["South"] || master == direction["West"]) {

  alert("You have exceeded the boundaries")
} else if (master == direction["East"]) {
  
  alert("You have entered the Gues Bedroom")
}

guest = prompt("This is the Guest Bedroom. This room is where visitors usually sleep in. Enter 1-4 to advance. Go the direction that the birds migrate in the Winter.")

if (guest == direction["North"] || guest == direction["East"] || guest == direction["West"]) {

  alert("You have exceeded the boundaries")
  
} else if (guest == direction["South"]) {
  
  alert("This is the Dining Room.")
}

dining = prompt("You've entered the dining room. This is where people usually eat. Enter 1-4 to advance. Go the direction of the Pacific.")

if (dining == direction["North"] || dining == direciton["South"] || dining == direction["East"]) {

  alert("You've exceeded the boundaries") 
  
} else if (dining == direction["West"]) {
  
  alert("This is the Living Room")
}

var lastRoom = prompt("The living room is where people gather and spend time with each other. Enter 1-4 to advance to the last room. Go the direction of the Maple Flag.")
switch (lastRoom) {

case '4':
  alert("Try again")
  break;
  
case '1':
  alert("You have completed the game")
  break;
  
case '2':
  alert("Try again")
  break;
  
case '3':
  alert("Try again")
  break;
}
