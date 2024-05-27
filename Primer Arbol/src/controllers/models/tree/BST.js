import { Node } from "./Node.js";

class BST {
    #root
    constructor() {
        this.#root = null;
    }

    add(value) {
        if (this.#root == null) {
            this.#root = new Node(value);
            if (this.#root != null)
                return true
        } else {
            return this.insertNode(this.#root, value)
        }
    }

    insertNode(node, value) {
        if (value.name < node.value.name) {
            if (node.left == null) {
                node.left = new Node(value);
                if (node.left != null) return true
            } else {
                return this.insertNode(node.left, value);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                if (node.right != null) return true
            } else
                return this.insertNode(node.right, value);
        }
    }

    search(value) {
        return this.searchNode(this.#root, value);
    }

    searchNode(node, name) {
        if (node === null || node.value.lastName === name)
            return node
        else if (name < node.value.lastName)
            return this.searchNode(node.left, name)
        else
            return this.searchNode(node.right, name)
    }

    findMinNode(node = this.#root, callback) {
        if (node) {
            if (node.left === null) {
                callback(node);
            } else {
                this.findMinNode(node.left, callback);
            }
        }
    }
    
    findMaxNode(node = this.#root, callback) {
        if (node) {
            if (node.right === null) {
                callback(node);
            } else {
                this.findMaxNode(node.right, callback);
            }
        }
    }
    

    getNodeByIndex(index) {
        let count = { val: 0 };
        return this.inOrderTraversal(this.#root, index, count);
    }

    inOrderTraversal(node, index, count) {
        if (node === null)
            return null;

        let left = this.inOrderTraversal(node.left, index, count);
        if (left !== null)
            return left;

        if (count.val === index)
            return node;
        count.val++;

        return this.inOrderTraversal(node.right, index, count);
    }
}
export default BST
