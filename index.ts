import axios from 'axios';
interface iTodo {
  id: number;
  title: string;
  completed: boolean;
}
const log = (id: number, title: string, completed: boolean) => {
  console.log(`
  The todo with id: ${id}
  has a title of:  ${title}
  and is completed? ${completed}
`)};

const url = "http://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then(response => {
  const todo = response.data as iTodo;
  log(todo.id, todo.title, todo.completed);
});