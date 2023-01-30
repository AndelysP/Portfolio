// Images/Technos du projet 1
import header4 from './img-work/project1/background.png';
import screen1 from './img-work/project1/Screenshot1.png';
import screen2 from './img-work/project1/Screenshot2.png';
import screen3 from './img-work/project1/Screenshot3.png';
import screen4 from './img-work/project1/Screenshot4.png';
import screen5 from './img-work/project1/Screenshot5.png';
import {AiFillAndroid} from "react-icons/ai";
import {DiReact} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";

// Images/Technos du projet 3
import workInProgress from './img-work/work.png'


const projects = [
    {
        id: 1,
        img_header: header4,
        img_project:[screen1, screen2, screen3, screen4, screen5],
        title: 'Pied à Terre',
        desc: 'Pied à Terre est une application mobile de réservation de logements pour les déplacements personnels ou professionnels, réalisée avec React Native et Android Studio. La page d\'accueil présente une sélection des logements les plus réservés, sur la liste des logements disponibles, il y a une option "Filtres" qui permet de filtrer les logements en fonction du nombre de personnes et du prix par nuit, avec la possibilité de réinitialiser les données. Sur la page de chaque logement, on retrouve le profil de la personne qui loue le bien.',
        technos: [<AiFillAndroid/>, <DiReact/>, <IoLogoJavascript/>],
        link:'',
        git: true
    },
    {
        id: 2,
        img_header: 'https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img_project:[workInProgress],
        title: 'Cine+',
        desc: 'Cine+ est une reproduction d\'un site de streaming de films, il a été réalisé à l\'aide d\'une API',
        technos: [],
        link: "",
        git: false
    },
    {
        id: 3,
        img_header: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img_project:[workInProgress],
        title: 'Drinks 3000',
        desc: 'Création d\'un site de boisson énergisante personnalisées',
        technos: [],
        link: "",
        git: false
    },
];


export default projects