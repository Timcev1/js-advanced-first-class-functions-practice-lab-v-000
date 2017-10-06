// Code your solution in this file!
function logDriverNames(driver){
  driver.forEach(function (driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(driver, location){
  driver.forEach(function (driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
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
