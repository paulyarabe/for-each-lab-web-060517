function iterativeLog(array){
  array.forEach(function(element, index){
    console.log(`${index}: ${element}`)
  })};

function iterate(callback){
  array = ['mom', 'dad', 'luke', 'bo', 'dominic', 'coco'];
  array.forEach(callback);
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
