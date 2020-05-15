var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if items in storage is less than 75% of limit
  //  if not, double storage
  //  rehash all items
  //if index isn't in storage
  //  add to bucket
  //  increment pointer
  //else check if the key already exists in bucket
  //  if so update value in that tuple
  //else add key value pair to bucket
  //  increment pointer
  if (this._size > Math.floor(.75 * this._limit)) {
    this._storage = this._storage * 2;
    LimitedArray.each(getIndexBelowMaxForKey(k, this._limit));
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


