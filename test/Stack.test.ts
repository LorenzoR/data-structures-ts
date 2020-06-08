import { Stack } from '../src';

describe('stack', () => {
    it('can create stack', async () => {
        expect.hasAssertions();

        const stack = new Stack();

        expect(stack !== null).toBe(true);
    });

    it('can push', async () => {
        expect.hasAssertions();

        const stack = new Stack();
        const newValue = 1;
        const response = stack.push(newValue);

        expect(response).toBe(newValue);
    });

    it('can pop when there is an element', async () => {
        expect.hasAssertions();

        const newValue = 1;
        const stack = new Stack();
        stack.push(newValue);

        const response = stack.pop();

        expect(response).toBe(newValue);
    });

    it('can pop when there is no element', async () => {
        expect.hasAssertions();

        const stack = new Stack();

        const response = stack.pop();

        expect(response).toBe(undefined);
    });

    it('can get size', async () => {
        expect.hasAssertions();

        const newValue = 1;
        const stack = new Stack();
        stack.push(newValue);

        expect(stack.getSize()).toBe(1);
    });
});
