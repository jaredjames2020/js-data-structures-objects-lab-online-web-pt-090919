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
  // let deleteDriverValue = { ...driver };
  // deleteDriverValue = (delete deleteDriverValue.key);
  
  // return deleteDriverValue;
  // const deleteDriverValue = Object.assign({}, deleteDriverValue};
  // console.log(deleteDriverValue)
  // delete deleteDriverValue[key];
  
  // return deleteDriverValue;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  // const aDriver = (delete driver['key']);
  // return aDriver;
}