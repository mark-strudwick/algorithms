function binarySearchTree(current, value) {
    if (current == null) {
        return false
    }

    if (current.value === value) {
        return true
    } else if (current.value > value) {
        return binarySearchTree(current.left, value)
    }
    return binarySearchTree(current.right, value)
}

const tree = {
    value: 10,
    left: {
        value: 8,
        left: {
            value: 3,
            right: null,
            left: null
        },
        right: {
            value: 9,
            left: null,
            right: null
        }
    },
    right: null
}

console.log("The tree:")
console.log(JSON.stringify(tree))
console.log("Does the tree have the value 3?: " + binarySearchTree(tree, 3))
console.log("Does the tree have the value 77?: " + binarySearchTree(tree, 77))
