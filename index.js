// Code your solution in this file!
function logDriverNames(driver){

}

function logDriversByHometown(driver, location){

}

function driversByRevenue(){

}

function driversByName(array){

}

function totalRevenue(driver){
  return driver.reduce(function (total, current){
    return current.revenue + total;
  });
}

function averageRevenue(driver){
  return totalRevenue(driver) / driver.length;
};
