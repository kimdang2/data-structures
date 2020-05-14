// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

var graphNode = function() {
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = new graphNode();
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    var edges = this.nodes[node].edges;
    for (var vertex in edges) {
      delete this.nodes[vertex].edges[node];
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].edges[toNode] || false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //check that both nodes are in graph
  //initialize empty edges array
  //add edge into each node object
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.nodes[fromNode].edges[toNode] = true;
    this.nodes[toNode].edges[fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
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
 addNode -
 contains -
 removeNode -
 addEdge -
 hasEdge -
 removeEdge -
 */


