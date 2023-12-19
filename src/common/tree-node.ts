export class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export const createTree = (values: Array<number | null>): TreeNode => {
    const createNode = (value: number, current: { index: number }): TreeNode => {
        const leftValue = values[++current.index];
        const rightValue = values[++current.index];

        const left = leftValue !== null && leftValue !== undefined ? createNode(leftValue, current) : undefined;
        const right = rightValue !== null && rightValue !== undefined ? createNode(rightValue, current) : undefined;

        return new TreeNode(value, left, right);
    }

    const counter = { index: 0 };
    const value = values[counter.index];

    return createNode(value, counter);
}