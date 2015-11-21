function single_element(arr) {
  var evens = arr.filter(function(element,pos){
    return pos % 2 != 0;})
  var n = [];
  var pos = 0;
  var m = [];
	for(var i = 0; i < evens.length; i++){
		if (n.indexOf(evens[i]) == -1) {
      n.push(evens[i]);
    }
    else {
      m.push(n.indexOf(evens[i]) );
    }
	};
  for (var i = 0; i < m.length; i++) {
    n.splice(m[i],m[i]+1);
  }
	return n;

}
