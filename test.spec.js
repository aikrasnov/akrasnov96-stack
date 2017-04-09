/**
 * Created by akrasnov96 on 04.04.17.
 */
'use strict';

const assert = require('power-assert');
const Stack  = require('./index.js');


describe('akrasnov96-stack', () => {
    describe('should have methods', () => {
        const stackInstance = new Stack();

        it('should have pop', () => {
            assert(typeof stackInstance.pop === 'function')
        });

        it('should have push', () => {
            assert(typeof stackInstance.push === 'function')
        });

        it('should have peek', () => {
            assert(typeof stackInstance.peek === 'function')
        });

        it('should have isEmpty', () => {
            assert(typeof stackInstance.isEmpty === 'function')
        });

    });

    describe('isEmpty', () => {
        it('should return true', () => {
            const stack = new Stack();
            assert(stack.isEmpty())
        });

        it('should return false', () => {
            const stack = new Stack();
            stack.push(1);
            assert(!stack.isEmpty())
        });
    });

    describe('push', () => {
        it('should add item', () => {
            let item  = 666;
            const stack = new Stack();

            assert(stack.isEmpty());
            stack.push(item);
            assert(!stack.isEmpty());
        });
    });

    describe('pop', () => {
        it('should return item', () => {
            let result;
            let item  = 666;
            const stack = new Stack(item);

            assert(!stack.isEmpty());
            result = stack.pop();
            assert(result === item);
        });

        it('should del item', () => {
            let item  = 666;
            const stack = new Stack(item);

            assert(!stack.isEmpty());
            stack.pop();
            assert(stack.isEmpty());
        });
    });

    describe('peek', () => {
        it('should return last item', () => {
            let items  = [1, 2, 3, 4, 5];
            const stack = new Stack(...items);

            for (let i = items.length-1; i >= 0; i--) {
                assert(stack.peek() === items[i]);
                stack.pop();
            }
            stack.pop();
            assert(stack.peek() === null);
        });
    });
});