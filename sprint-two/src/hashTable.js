var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
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
  if (this._count + 1 > 0.75 * this._limit) {
    this.resize(1);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  if (bucket.length === 0) {
    bucket.push([ k, v ]);
    this._count += 1;
  } else {
    //var tupleIndex = this.findTupleIndex(bucket, k);
    var tupleIndex = bucket.findIndex(function(tuple) {
      return tuple[0] === k;
    });
    if (tupleIndex === -1) {
      bucket.push([ k, v ]);
      this._count += 1;
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
  if (this._count > 8 && this._count - 1 < 0.25 * this._limit ) {
    this.resize(-1);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    //var tupleIndex = this.findTupleIndex(bucket, k);
    var tupleIndex = bucket.findIndex(function(tuple) {
      return tuple[0] === k;
    });
    if (tupleIndex > -1) {
      bucket.splice(tupleIndex, 1);
      this._count -= 1;
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.resize = function(direction) {
  // if increasing the size, pass in a 1
  //    otherwise, pass in a -1
  // set limit to limit * 2^(value passed)
  // init newLimitedArray(new limit)
  // traverse through old limitedArray
  //   if a bucket exists at index
  //      then insert into newLimitedArray
  //  set stroage to newLimitedArray

  this._limit = this._limit * Math.pow(2, direction);
  var resizedStorage = {};
  resizedStorage._storage = LimitedArray(this._limit);
  resizedStorage.insert = this.insert;
  resizedStorage.findTupleIndex = this.findTupleIndex;

  this._storage.each(function(bucket) {
    if (bucket) {
      _.each(bucket, function(tuple) {
        var key = tuple[0];
        var value = tuple[1];
        resizedStorage.insert(key, value);
      });
    }
  });
  this._storage = resizedStorage._storage;
};

// HashTable.prototype.resize = function(direction) {
//   // if increasing the size, pass in a 1
//   //    otherwise, pass in a -1
//   // set limit to limit * 2^(value passed)
//   // init newLimitedArray(new limit)
//   // traverse through old limitedArray
//   //   if a bucket exists at index
//   //      then insert into newLimitedArray
//   //  set stroage to newLimitedArray

//   this._limit = this._limit * Math.pow(2, direction);
//   var resizedStorage = {};
//   // resizedStorage._storage = LimitedArray(this._limit);
//   // resizedStorage.insert = this.insert;
//   // resizedStorage.findTupleIndex = this.findTupleIndex;

//   var oldStorage = Object.assign(this._storage);
//   this._storage = LimitedArray(this._limit);
//   var context = this;
//   console.log(this);
//   oldStorage.each(function(bucket) {
//     if (bucket) {
//       _.each(bucket, function(tuple) {
//         var key = tuple[0];
//         var value = tuple[1];
//         context.insert(key, value);
//       });
//     }
//   });
//   this._storage = resizedStorage._storage;
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */


