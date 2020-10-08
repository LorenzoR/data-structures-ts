import { Matrix } from '../src';

describe('matrix', () => {
    it('can create a matrix', async () => {
        expect.hasAssertions();

        const matrix = new Matrix<number>(1, 1);

        expect(matrix !== null).toBe(true);
    });

    it('can insert and get one element', async () => {
        expect.hasAssertions();

        const index = [1, 1];
        const newElement = 1;
        const matrix = new Matrix<number>(2, 2);
        matrix.insert(newElement, index[0], index[1]);

        expect(matrix.get(index[0], index[1])).toBe(newElement);
    });

    it('can not insert at invalid row', async () => {
        expect.hasAssertions();

        const invalidRow = 10;
        const validCol = 0;
        const newElement = 1;
        const matrix = new Matrix<number>(2, 2);

        const errorMsg = 'Invalid row';
        expect(() => matrix.insert(newElement, invalidRow, validCol)).toThrow(errorMsg);
    });

    it('can not insert at invalid column', async () => {
        expect.hasAssertions();

        const validRow = 0;
        const invalidCol = 10;
        const newElement = 1;
        const matrix = new Matrix<number>(2, 2);

        const errorMsg = 'Invalid column';
        expect(() => matrix.insert(newElement, validRow, invalidCol)).toThrow(errorMsg);
    });
});
