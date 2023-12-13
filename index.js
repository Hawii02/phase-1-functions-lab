// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >= 42){
        return distance - 42;
    }else{
        return 42 - distance;
    }
}
distanceFromHqInBlocks(50);

function distanceFromHqInFeet(distance){
    const blocks = distanceFromHqInBlocks(distance);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264
}
distanceTravelledInFeet(28, 34)




function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else  {
        return 'cannot travel that far';
    }
}