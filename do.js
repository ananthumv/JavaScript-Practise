class Node
{
	constructor(data)
	{
		this.data = data
		this.left = null
		this.right = null
	}
}

class BinarySearchTree{
	constructor()
	{
		this.root = null
	}

insert(data)
{
	let newNode = new Node(data)
	if(this.root === null)
		this.root = newNode;
	else

		this.insertNode(this.root, newNode);
}

insertNode(node, newNode)
{
	if(newNode.data < node.data)
	{
		if(node.left === null)
			node.left = newNode;
		else
			this.insertNode(node.left, newNode);
	}

	else
	{
		if(node.right === null)
			node.right = newNode;
		else
			this.insertNode(node.right,newNode);
	}
}


// helper method that calls the
// removeNode with a given data
remove(data)
{
	// root is re-initialized with
	// root of a modified tree.
	this.root = this.removeNode(this.root, data);
}

// Method to remove node with a
// given data
// it recur over the tree to find the
// data and removes it
removeNode(node, key)
{
		
	// if the root is null then tree is
	// empty
	if(node === null)
		return null;

	// if data to be delete is less than
	// roots data then move to left subtree
	else if(key < node.data)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}

	// if data to be delete is greater than
	// roots data then move to right subtree
	else if(key > node.data)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}

	// if data is similar to the root's data
	// then delete this node
	else
	{
		// deleting node with no children
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}

		// deleting node with one children
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}

		// Deleting node with two children
		// minimum node of the right subtree
		// is stored in aux
		let temp = node.right

      while(temp.left !== null) {
        temp = temp.left
      }

      node.data = temp.data

      node.right = this.removeNode(node.right, node.data)
	  return node
	}

}


}


let bst = new BinarySearchTree()

bst.insert(78)
bst.insert(45)
bst.insert(65)
bst.insert(73)
bst.insert(80)
bst.insert(88)
bst.insert(79)
console.log(bst)

bst.remove(78)
console.log(bst)
