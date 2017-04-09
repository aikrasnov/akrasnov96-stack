/**
 * Created by akrasnov96 on 04.04.17.
 *
 */

'use strict';

class Stack {
    constructor (...array) {
        this._data = [];
        if (array.toString()) {
            for (let item of array) {
                this._data.push(item);
            }
        }
    }

    push(item) {
        this._data.push(item);
    }

    pop() {
        return this._data.pop();
    }

    peek() {
        return this._data.length-1 >= 0 ? this._data[this._data.length-1] : null;
    }

    isEmpty() {
        return this._data.length === 0;
    }

    toString() {
        return this._data.join(', ');
    }
}

module.exports = Stack;