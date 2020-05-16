var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.findTupleIndex = function(bucket, key) {
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return i;
    }
  }
  return -1;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  if (bucket.length === 0) {
    bucket.push([ k, v ]);
    this._size += 1;
  } else {
    var tupleIndex = this.findTupleIndex(bucket, k);
    if (tupleIndex === -1) {
      bucket.push([ k, v ]);
      this._size += 1;
    } else {
      bucket[tupleIndex][1] = v;
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var tupleIndex = this.findTupleIndex(bucket, k);
    if (tupleIndex > -1) {
      return bucket[tupleIndex][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var tupleIndex = this.findTupleIndex(bucket, k);
    if (tupleIndex > -1) {
      bucket.splice(tupleIndex, 1);
    }
  }
  this._storage.set(index, bucket);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


