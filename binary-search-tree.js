function binarySearchTree (current, value) {
    if (current === null) {
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
                left: {
                    value: 1,
                    right: null,
                    left: null
                },
                right: {
                    value: 9,
                    right: null,
                    left: null,
                }
        },
        right: null
    },
    right: null
};

console.log("The tree:")
console.log(JSON.stringify(tree))
console.log("Is 8 in the tree?: " + binarySearchTree(tree, 8))
console.log("Is 77 in the tree?: " + binarySearchTree(tree, 77))
