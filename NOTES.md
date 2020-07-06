# Typescript: The Complete Developer's Guide by Stephen Grider.

## Getting Started with Typescript:
- Typescript = JavaScript + A Type System.
- https://www.typescriptlang.org/play/
- Install the typescript compiler:
    ```javascript
        npm install -g typescript ts-node
    ```
- Visual Studio Code setup:
1. Install prettier. Some lighweight configuration preferences.

- First application:
1. 'Fake' API: http://jsonplaceholder.typicode.com/todos/1
    ```javascript
        npm init -y
        npm install axios
    ```
    ```javascript
        tsc index.ts
        node index.js
        ts-node index.ts
    ```
2. Updates using typescript:
    ```javascript
        import axios from 'axios';
        const url = "http://jsonplaceholder.typicode.com/todos/1";
        axios.get(url).then(response => {
            console.log(response.data);
        });
    ```
    ```javascript
    import axios from 'axios';
    interface iTodo {
    id: number;
    title: string;
    completed: boolean;
    }
    const url = "http://jsonplaceholder.typicode.com/todos/1";
    axios.get(url).then(response => {
        const todo = response.data as iTodo;
        console.log(`
            The todo with id: ${todo.id}
            has a title of:  ${todo.title}
            and is completed? ${todo.completed} 
        `);
    });
```

## What is a Type System:


## Type Annotations in Action:

## Annotations With Functions and Objects:

## Mastering Typed Arrays:

## Tuples in Typescript:

## The All-Important Interface:

## Building Functionality with Classes:

## Design Patterns with Typescript:

## More on Design Patterns:

## Reusable Code:

## Advanced Generics:

## Let's Build a Web Framework:

## Express + Typescript Integration:

## Decorators:

## Advanced Express and TS Integration:

## React and Redux with Typescript:
