

import React from 'react';
import axios from 'axios';
import Todo from '@/components/view/todo/todoComponent';
import api from '../../../utils/interceptor'

// const fatchTodos =async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const todos = await res.json();
//   return todos;
// }

const getPostsData = async () => {
  const res = await axios
    .get(`${process.env.API_URL}`)
    .then(data => data.data)
    .catch(error => console.log(error));

// const res = fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
  return res;
};

const getData = async () => {
  const res = await api.get('products')
   .then(response => response.data)
   .catch(error => console.log(error));
  return res;
}

async function Page() {
  const todos = await getData();
  return (
    /* @ts-ignore */
    <Todo todos={todos} />
  )
}

export default Page;