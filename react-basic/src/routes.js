import Users from './Pages/Users';
import User from './Pages/User';
import Home from './Pages/Home';
import Movies from './Pages/Movies';

export default [
    { 
        path:'/',
        component:Home
    },
    {   
        path:'/movies',
        component:Movies
    },
    {  
        path:'/users',
        component:Users
    },
    {  
        path:'/users/:id',
        component:User
    },
];

