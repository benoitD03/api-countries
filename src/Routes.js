import Accueil from './components/Accueil'
import Europe from './components/Europe'
import Info from './components/Info'

export default [
    {path: '/', component: Accueil},
    {path: '/Europe', component: Europe},
    {path: '/:id', component: Info}
]