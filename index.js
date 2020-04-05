// Write your solution in this file!

let driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const deleteDriverValue = { ...driver };
  delete deleteDriverValue.key;
  
  return deleteDriverValue;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  const destrucDriverKey = (delete driver['key']);
  return driver;
}