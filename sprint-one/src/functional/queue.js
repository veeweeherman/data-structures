var Queue = function(){
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
    return size;
  };

  someInstance.dequeue = function(){
    delete storage[size-1]

    if (size > 0) {
    size--;
    }
    return size
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
