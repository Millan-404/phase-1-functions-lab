// Code your solution in this file!

// returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(blocks) {
   if (blocks > 42){
    return blocks - 42;
   } else if (blocks < 42){  // check later to find a better way to express vaule when negative 
    return 42 - blocks;
   }
  }
   
   // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  function distanceFromHqInFeet(blocks) { 
   return distanceFromHqInBlocks(blocks) * 264; //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
    
  

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start < destination){
        return (destination - start) * 264;
    } else  {
        return ( start - destination ) * 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }