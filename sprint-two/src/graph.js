
// Instantiate a new graph
var Graph = function() {
  // A new graph never has any nodes or edges until it's added
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(vertex) {
  // If vertex doesn't exist in Graph, then store the vertex to the graph
  // If vertex exists, then add edges to that vertex --> graph = { vertex: {edges: {}}  }
  var graph = this._nodes;
  graph[vertex] = graph[vertex] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(vertex) {
  var graph = this._nodes;
  /* if (graph[vertex]) {
    return true;
  } else {
    return false;
  }*/
  //return graph[vertex] ? true : false;
  return !!graph[vertex];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(vertex) {
  var graph = this._nodes;
  if (this.contains(vertex)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var connectingVertex in graph[vertex].edges) { // Traverse each vertex's edges list
      this.removeEdge(vertex, connectingVertex);
    }
    delete graph[vertex];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromVertex, toVertex) {
  var graph = this._nodes;
  //return graph[fromVertex].edges[toVertex] || false;
  return !!graph[fromVertex].edges[toVertex];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromVertex, toVertex) {
  var graph = this._nodes;
  // Add an edge to each vertex pointing to the other vertex
  graph[fromVertex].edges[toVertex] = true; // {v1 : {edges : {v2: true}}}
  graph[toVertex].edges[fromVertex] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromVertex, toVertex) {
  var graph = this._nodes;
  // Remove edges from each vertex's edge list
  delete graph[fromVertex].edges[toVertex];
  delete graph[toVertex].edges[fromVertex];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var graph = this._nodes;
  for (var vertex in graph) {
    cb(vertex);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addNode: O(1)
 * contains: O(1)
 * removeNode: O(1)
 * hasEdge: O(n)
 * addEdge: O(n)
 * removeEdge: O(n)
 * forEachNode: O(n)
 *
 */
