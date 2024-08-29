import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import UITodo from './components/UITodo';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';


const isAuth = localStorage.getItem('loginKey');

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
            element: isAuth ? <UITodo /> : <Navigate to={'/login'} />
        }
    ]
);
function App() {
    return (
        <div className="App bg-zinc-800">
            <RouterProvider router={routes}></RouterProvider>
        </div>

    );
}

export default App;
