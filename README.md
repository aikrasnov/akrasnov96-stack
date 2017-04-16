# akrasnov96-stack [![Build Status](https://travis-ci.org/aikrasnov/akrasnov96-stack.svg?branch=master)](https://travis-ci.org/aikrasnov/akrasnov96-stack)
Stack implementation in JS

## Установка
```bash
npm install akrasnov96-stack --save
```

## Использование
```javasript
const Stack = require('akrasnov96-stack');
let myStack = new Stack();
myStack.push(1) // добавить элемент в стек
myStack.pop() // взять элемент сверху, и удалить его из стека
myStack.isEmpty() // true если пустой, false если нет
myStack.peek() // показать верхний элемент
```
