import './App.css';
import UITodo from './components/UITodo';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <SignUp />
        },
        {
            path: '/login',
            element: <SignIn />
        },
        {
            path: '/todo-list',
            element: <UITodo />
        }
    ]
);
function App() {
    return (
        <div className="App bg-zinc-800">

            {/* <SignUp /> */}
            {/* <SignIn /> */}
            {/* <UITodo /> */}
            <RouterProvider router={routes}></RouterProvider>
        </div>

    );
}

export default App;
