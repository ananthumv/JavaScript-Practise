class Node
{
    constructor(data)
    {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree
{
	constructor()
	{
		this.root = null
    }

    insert(data)
    {
        let newNode = new Node(data)
        if(this.root === null)
        {
            this.root = newNode
        }
        else this.insertNode(this.root, newNode)        
    }

    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
           if(node.left === null)
           {
            node.left = newNode
           }
           else this.insertNode(node.left, newNode)
        }
        else
        {
            if(node.right === null)
            {
                node.right = newNode
            }
           else this.insertNode(node.right, newNode)
        }
    }
    remove(data)
    {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, key){
        if(node === null)
		return null

        else if(key < node.data)
        {
            node.left = this.removeNode(node.left, key)
            return node
        }

        else if(key > node.data)
        {
            node.right = this.removeNode(node.right, key)
            return node
        }
        else
        {
            if(node.left === null && node.right === null)
            {
                node = null
                return node
            }
            if(node.left === null)
            {
                node = node.right
                return node
            }
            
            else if(node.right === null)
            {
                node = node.left
                return node
            }
            let temp = node.right

        while(temp.left !== null) {
            temp = temp.left
        }

        node.data = temp.data

        node.right = this.removeNode(node.right, node.data)
        return node
        }
    }

    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node)
    {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node)
    {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    getRootNode()
    {
        return this.root;
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


bst.remove(78)

console.log(bst)

let root = bst.getRootNode()

console.log("inorder traversal")
bst.inorder(root)

console.log("preorder traversal")
bst.preorder(root)

console.log("postorder traversal")
bst.postorder(root)