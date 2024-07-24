import About from "../../pages/About";
import PostIdPages from "../../pages/PostIdPages";
import Posts from "../../pages/Posts";


export const routes = [
    { path: '/about', element: About},
    { path: '/posts', element: Posts},
    { path: '/posts/:id', element: PostIdPages}
]

