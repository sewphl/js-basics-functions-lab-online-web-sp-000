// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  if (someValue > 42) {
    return(someValue-42);
  }
  else {
    return(42-someValue);
  }
}

function distanceFromHqInFeet (someValue) {
  return(distanceFromHqInBlocks(someValue)*264);
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return((destination - start)*264);
  }
  else{
    return((start - destination)*264);
  }
}

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination);
  if (dist<=400) {
    return(0)
  }
  else if (dist>400 && dist<=2000){
    return((dist-400)*0.02);
  }
  else if(dist<=2500 && dist>2000){
    return(25);
  }
  else{
    return("cannot travel that far");
  }
}
