const findNode = (tree, value) => {
  if (tree.node === value) return tree;
  for (let branch of tree.children) {
    const nextBranch = findNode(branch, value);
    if (nextBranch) return nextBranch;
  }
};

const tree = {
  node: 1,
  children: [
    {
      node: 2,
      children: [
        {
          node: 3,
          children: [
            {
              node: 4,
              children: [
                {
                  node: 5,
                  children: [],
                },
                {
                  node: 6,
                  children: [],
                },
                {
                  node: 7,
                  children: [],
                },
                {
                  node: 8,
                  children: [],
                },
              ],
            },
            {
              node: 9,
              children: [],
            },
          ],
        },
      ],
    },
    {
      node: 10,
      children: [
        {
          node: 11,
          children: [
            {
              node: 12,
              children: [],
            },
          ],
        },
        {
          node: 13,
          children: [],
        },
        {
          node: 14,
          children: [],
        },
      ],
    },
  ],
};

console.log(findNode(tree, 11));
console.log(findNode(tree, 1));
console.log(findNode(tree, 25));
