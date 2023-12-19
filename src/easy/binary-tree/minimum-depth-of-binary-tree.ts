// https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
import {createTree, TreeNode} from "../../common/tree-node";

const minDepth = (node: TreeNode | null): number => {
    let step = 0;

    const drill = (node: TreeNode | null, drillStep = 1) => {
        if (!node || (step && drillStep >= step)) {
            return;
        }

        if (!node.left && !node.right) {
            if (!step || step > drillStep) {
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

// const minDepth = (node: TreeNode | null): number => {
//     let min;
//     let step = 0;
//
//     const drill = (node: TreeNode | null, preTotal = 0, drillStep = 1) => {
//         if (!node) {
//             return;
//         }
//
//         const total = preTotal + node.val;
//         if (!node.left && !node.right) {
//             if (min === undefined || min > total) {
//                 min = total;
//                 step = drillStep;
//             }
//
//             return;
//         }
//
//         drill(node.left, total, drillStep + 1);
//         drill(node.right, total, drillStep + 1);
//     }
//
//     drill(node);
//     console.log(min, step);
//     return step;
// }

const specs = [
    [3, 9, 20, null, null, 15, 7],
    [2, null, 3, null, 4, null, 5, null, 6],
    [-8,-6,7,6,null,null,null,null,5]
];

specs.forEach(spec => {
    const result = minDepth(createTree(spec));
    console.log(result);
});

