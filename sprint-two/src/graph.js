// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    var vertexes = this.edges[node];
    for (var vertex in vertexes) {
      delete this.edges[vertex][node];
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode][toNode] || false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check that both nodes are in graph
  //initialize empty edges array
  //add edge into each node object
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges[fromNode][toNode] = true;
    this.edges[toNode][fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    delete this.edges[fromNode][toNode];
    delete this.edges[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
Because we knew the nodes we would be given in the spec were primitive
we simplified our implementation so that we could perform these processes
in constant time, however, normally this would not be the case as a node
is not normally a primitive value.

Since this is a two dimensional data structure we us V to represent the number of Vertexes (nodes) and E to represent the respective number of edges

 addNode - O(1)
 contains - O(1)
 removeNode - O(e)
 addEdge - O(1)
 hasEdge - O(1)
 removeEdge - O(1)
 forEachNode - O(v)

 If we implemented it to handle node objects we would expect this time complexity

  addNode - O(1)
 contains - O(v)
 removeNode - O(ve)

 */


