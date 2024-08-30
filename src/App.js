import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import UITodo from './components/UITodo';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    // const isAuth = localStorage.getItem('loginKey');
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        setIsAuth(localStorage.getItem('loginKey') ? true : false);
    }, []);
    const routes = createBrowserRouter(
        [
            {
                path: '/',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <SignIn authStatus={setIsAuth} />
            },
            {
                path: '/todo-list',
                element: isAuth ? <UITodo /> : <Navigate to={'/login'} />
            }
        ]
    );
    return (
        <div className="App bg-zinc-800">
            <RouterProvider router={routes}></RouterProvider>
        </div>

    );
}

export default App;
