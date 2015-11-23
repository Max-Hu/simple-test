function single_element(arr) {
  var evens = arr.filter(function(element,pos){
    return pos % 2 != 0;})
  var result = [];
  for(var i = 0; i < evens.length; i++){
    if (evens.indexOf(evens[i]) == evens.lastIndexOf(evens[i])) {
      result.push(evens[i]);
    }
  }
	return result;
}
