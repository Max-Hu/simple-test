function even_group_calculate_average(arr) {
  var evens = getEvens(arr);
  if (evens.length == 0) {
    return [0];
  }
  var evensGroup = getGroups(evens);
  return getAverage(evensGroup);
}

function getEvens(arr) {
  var evens = arr.filter(function(element,pos){
    return pos % 2 != 0;})
  return filterEvens = evens.filter(function(element){
    return element % 2 == 0;})
}

function getGroups(arr) {
  var strEvens = _.map(arr, function(num){ return num.toString(); });
  var group = _.groupBy(strEvens, 'length');
  var intEvens = [];
  for(var key in group){
    var valueList = group[key]
    var list = [];
    for(var i = 0; i < valueList.length; i++){
      list.push(parseInt(valueList[i]));
    }
    intEvens.push(list);
  }
  return intEvens;
}

function getAverage(groupList) {
  var result = [];
  for(var i = 0; i < groupList.length; i++){
    var sum = _.reduce(groupList[i], function(memo, num){ return memo + num; }, 0);
    result.push(sum/(groupList[i].length));
  }
  return result;
}
