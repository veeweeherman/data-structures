var Stack = function(){
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    //The pop() method removes the last element from an array and returns that element.
    var result = storage[size-1] //last item
    delete storage[size-1] //removing last item

    if (size > 0) {
      size--;
    }
    console.log(result)
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
