import { BinarySearchTree } from '../src';

describe('binary search tree', () => {
    it('can create binary search tree', async () => {
        expect.hasAssertions();

        const binarySearchTree = new BinarySearchTree<number>();

        expect(binarySearchTree !== null).toBe(true);
    });

    it('can insert one element', async () => {
        expect.hasAssertions();

        const newElement = 1;
        const binarySearchTree = new BinarySearchTree<number>();
        binarySearchTree.insert(newElement);

        expect(binarySearchTree.find(newElement)).toBe(true);
    });

    it('can insert some element', async () => {
        expect.hasAssertions();

        const newElements = [5, 1, 2, 6, 3];
        const binarySearchTree = new BinarySearchTree<number>();
        newElements.forEach((element) => binarySearchTree.insert(element));

        newElements.forEach((element) => {
            expect(binarySearchTree.find(element)).toBe(true);
        });
    });

    it('can not insert duplicates', async () => {
        expect.hasAssertions();

        const newElement = 1;
        const binarySearchTree = new BinarySearchTree<number>();

        binarySearchTree.insert(newElement);

        const errorMsg = `There is already an element with value ${newElement}`;
        expect(() => binarySearchTree.insert(newElement)).toThrow(errorMsg);
    });
});
