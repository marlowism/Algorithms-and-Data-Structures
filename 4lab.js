class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class binaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        if (!this.root) {
            this.root = new Node(value)
        } else {
            let node = this.root
            let newNode = new Node(value)
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left
                }
            }
            if (value > node.value) {
                node.right = newNode
            } else {
                node.left = newNode
            }
        }
    }

    preOrder(node, callback) {
        if (!node) {
            return
        }

        if (callback) {
            callback(node)
        }

        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }

    inOrder(node, callback) {
        if (!node) {
            return
        }

        this.inOrder(node.left, callback)
        if (callback) {
            callback(node)
        }
        this.inOrder(node.right, callback)
    }

    postOrder(node, callback) {
        if (!node) {
            return
        }

        this.postOrder(node.left, callback)
        this.postOrder(node.right, callback)

        if (callback) {
            callback(node)
        }
    }

    traverseDFS(callback, method) {
        if (method === 'preOrder') {
            return this.preOrder(this.root, callback)
        }

        if (method === 'inOrder') {
            return this.inOrder(this.root, callback)
        }

        return this.postOrder(this.root, callback)
    }

    traverseBFS(callback) {
        const queue = [this.root]

        while (queue.length) {
            const node = queue.shift()
            callback(Node)

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    minEl(node) {
        node = this.root
        if (!node) return null
        while (node.left != null) {
            node = node.left
        }
        return node.value
    }

    maxEl(node) {
        node = this.root
        if (!node) return null
        while (node.right != null) {
            node = node.right
        }
        return node.valueOf()

    }

    search(node, value) {
        if (node === null) {
            return null
        } else if (value < node.value) {
            return this.search(node.left, value)
        } else if (value > node.value) {
            return this.search(node.right, value)
        } else {
            return node
        }
    }

    searchNext(node, value) {
        let next = null
        while (node != null) {
            if (node.value > value) {
                next = node
                node = node.left
            } else {
                node = node.right
            }
        }
        return next
    }

    searchPrev(node, value) {
        let next = null
        while (node != null) {
            if (node.value < value) {
                next = node
                node = node.right
            } else {
                node = node.left
            }
        }
        return next
    }

    deleteItem(nodeValue) {
        if (this.root === null) {
            return null
        }
        this.root = this.deleteNode(this.root, nodeValue);
    }

    deleteNode(currentNode, itemValue)  {
        if (currentNode.value === itemValue) {
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            }

            if (currentNode.left === null) {
                return currentNode.right;
            }

            if (currentNode.right === null) {
                return currentNode.left;
            }

            const minNodeInRightSubtree = this.minEl(currentNode.right);
            currentNode.value = minNodeInRightSubtree.value;

            currentNode.right = this.deleteNode(
                currentNode.right,
                minNodeInRightSubtree.value
            );
            return currentNode;
        }

        if (itemValue < currentNode.value) {
            if (currentNode.left === null) {
                return currentNode;
            }

            currentNode.left = this.deleteNode(currentNode.left, itemValue);
            return currentNode;
        }

        if (itemValue > currentNode.value) {
            if (currentNode.right === null) {
                return currentNode;
            }

            currentNode.right = this.deleteNode(currentNode.right, itemValue);
            return currentNode;
        }
    }


}

const tree = new binaryTree()

tree.add(3)
tree.add('+')
tree.add(5)
tree.add('*')
tree.add(4)
tree.add(213)
tree.add(-32)
tree.add('/')
tree.add(2)
tree.add('*')
tree.add(100)










