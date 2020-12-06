import {
    Home
} from './pages/Home.jsx'
import {
    Board
} from './pages/Board.jsx'
import {
    LoginAndSignUp
} from './pages/LoginAndSignUp.jsx'

export default [{
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: LoginAndSignUp
    },
    {
        path: '/board/:id',
        component: Board
    }
]