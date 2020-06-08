import Queue from '../src/queue/Queue';

describe('queue', () => {
    it('can create queue', async () => {
        expect.hasAssertions();

        const queue = new Queue();

        expect(queue !== null).toBe(true);
    });

    it('can enqueue', async () => {
        expect.hasAssertions();

        const queue = new Queue();
        const newValue = 1;
        const response = queue.enqueue(newValue);

        expect(response).toBe(newValue);
    });

    it('can peek when there is an element', async () => {
        expect.hasAssertions();

        const newValue = 'string';
        const queue = new Queue();
        queue.enqueue(newValue);

        const response = queue.peek();

        expect(response).toBe(newValue);
    });

    it('can peek when there is no element', async () => {
        expect.hasAssertions();

        const queue = new Queue();
        const response = queue.peek();

        expect(response).toBe(undefined);
    });

    it('can dequeue', async () => {
        expect.hasAssertions();

        const newValue = 1;
        const queue = new Queue();
        queue.enqueue(newValue);

        const response = queue.dequeue();

        expect(response).toBe(newValue);
    });

    it('can get size', async () => {
        expect.hasAssertions();

        const newValue = 1;
        const queue = new Queue();
        queue.enqueue(newValue);

        expect(queue.getSize()).toBe(1);
    });
});
