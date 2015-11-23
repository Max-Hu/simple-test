function calculate_median(arr) {
  var evens = arr.filter(function(element,pos){
    return pos % 2 != 0;})
  if (evens.length %2 != 0) {
    return getMiddle(evens);
  }else {
    var odds = arr.filter(function(element,pos){
      return pos % 2 == 0;})
    return getMiddle(odds)
  }
}

function getMiddle(arr) {
  var pos = parseInt(arr.length/2);
  // var result = arr.splice(pos , pos + 1);
   var result = arr.slice(pos , pos + 1);
  return result.pop();
}
