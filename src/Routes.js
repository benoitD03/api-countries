import Accueil from './components/Accueil'
import Europe from './components/Europe'
import Ameriques from './components/Ameriques'
import Afrique from './components/Afrique'
import Asie from './components/Asie'
import Oceanie from './components/Oceanie'
import Info from './components/Info'

export default [
    {path: '/', component: Accueil},
    {path: '/Europe', component: Europe},
    {path: '/Ameriques', component: Ameriques},
    {path: '/Afrique', component: Afrique},
    {path: '/Asie', component: Asie},
    {path: '/Oceanie', component: Oceanie},
    {path: '/:id', component: Info}
]