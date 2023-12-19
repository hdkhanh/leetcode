// https://leetcode.com/problems/maximum-depth-of-binary-tree/

import {createTree, TreeNode} from "../../common/tree-node";

const maxDepth = (node: TreeNode | null): number => {
    let step = 0;

    const drill = (node: TreeNode | null, drillStep = 1) => {
        if (!node) {
            return;
        }

        if (!node.left && !node.right) {
            if (!step || step < drillStep) {
                step = drillStep;
            }

            return;
        }

        drill(node.left, drillStep + 1);
        drill(node.right, drillStep + 1);
    }

    drill(node);
    return step;
}

const specs = [
    [3, 9, 20, null, null, 15, 7],
    [1,null,2],
];

specs.forEach(spec => {
    const result = maxDepth(createTree(spec));
    console.log(result);
});