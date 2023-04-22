// Images/Technos du projet 1
import header4 from './img-work/project1/background.png';
import screen1 from './img-work/project1/screen1.png';
import screen2 from './img-work/project1/screen2.png';
import headerBored from './img-work/project5/background.png';
import bored1 from './img-work/project5/screen1.png';
import bored2 from './img-work/project5/screen2.png';
import bored3 from './img-work/project5/screen3.png';
import { AiFillAndroid, AiOutlineAntDesign } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJsonwebtokens } from "react-icons/si";
import workInProgress from './img-work/work.png'

import duel1 from './img-work/project6/screen1.png';
import duel2 from './img-work/project6/screen2.png';
import duel3 from './img-work/project6/screen3.png';

import fiveBackround from './img-work/project7/background.png';
import five1 from './img-work/project7/screen1.png';
import five2 from './img-work/project7/screen2.png';
import five3 from './img-work/project7/screen3.png';
import five4 from './img-work/project7/screen4.png';

const projects = [
    {
        id: 1,
        img_header: header4,
        img_project: [screen1, screen2],
        title: 'Pied à Terre',
        desc: 'Pied à Terre est une application mobile de réservation de logements pour les déplacements personnels ou professionnels, réalisée avec React Native et Android Studio. La page d\'accueil présente une sélection des logements les plus réservés, sur la liste des logements disponibles, il y a une option "Filtres" qui permet de filtrer les logements en fonction du nombre de personnes et du prix par nuit, avec la possibilité de réinitialiser les données. Sur la page de chaque logement, on retrouve le profil de la personne qui loue le bien.',
        technos: [<AiFillAndroid />, <DiReact />, <IoLogoJavascript />],
        link: '',
        git: true
    },
    {
        id: 2,
        img_header: fiveBackround,
        img_project: [fiveBackround, five1, five2, five3, five4],
        title: 'Five Star\'s Booking',
        desc: "“Five Star’s Booking” est une entreprise fictive opérant dans le secteur du tourisme spatial, cherchant à allier l’organisation de voyage dans l’espace avec la recherche scientifique et l’éco responsabilité. L'objectif principal de Five Star's booking est de créer une expérience utilisateur agréable et facile d’utilisation pour ceux qui souhaitent explorer l'espace. Les utilisateurs pourront créer un profil personnalisé pour enregistrer leurs informations de voyage, suivre l’état de leur panier de réservations, et obtenir des informations sur les voyages spatiaux à travers le site. L’utilisateur aura également la possibilité de personnaliser son voyage et poser des questions aux experts grâce à un formulaire de contact.",
        technos: [<DiReact />, <AiOutlineAntDesign />, <FaNodeJs />, <SiMongodb />, <SiJsonwebtokens />],
        link: "",
        git: true
    },
    {
        id: 3,
        img_header: headerBored,
        img_project: [bored1, bored2, bored3],
        title: 'Boredbrain 🧠',
        desc: "Imaginez un générateur d'idées aléatoires qui vous donne des suggestions sur des activités à faire quand vous ne savez pas quoi faire de votre temps libre. Ce site est comme un ami qui vous donne un coup de pouce pour sortir de votre zone de confort et essayer quelque chose de nouveau. Et le meilleur dans tout ça c'est que le générateur d'idées est complètement aléatoire donc vous ne savez jamais ce que vous allez obtenir ! Une minute il peut vous proposer de faire du yoga et la minute suivante il peut vous suggérer de cuisiner un plat que vous n'avez jamais essayé auparavant. Alors si vous êtes coincé chez vous et que vous avez besoin d'inspiration ce site est fait pour vous ! (La traduction française arrivera dans une prochaine version.)",
        technos: [<DiReact />, "+ Bored Api"],
        link: 'https://boredbrain.vercel.app/',
        git: true
    },
    {
        id: 4,
        img_header: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/fr_CA/games/switch/s/super-smash-bros-ultimate-switch/hero',
        img_project: [duel1, duel2, duel3],
        title: 'Super Smash Bros - Duel',
        desc: 'Super Smash Bros Duel est un jeu web opposant deux personnages, le site propose une interface utilisateur où les joueurs peuvent choisir leur personnage, une fois le choix effectué, un bot est choisi aléatoirement. Il y a la possibilité de lancer des attaques spécifiques avec une gestion des esquives aléatoire lors du combat, les dégâts sont calculés en fonction des dégâts du personnage ainsi que des dégâts de l\'attaque. Le jeu a été créé avec PHP en POO pour mettre en pratique la notion de classes et d\'objets.',
        technos: [<IoLogoJavascript />, <FaPhp />],
        link: "",
        git: true
    },
    {
        id: 5,
        img_header: 'https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        img_project: [workInProgress],
        title: 'Drinks 3000',
        desc: 'Création d\'un site de vente de boissons énergisantes personnalisées',
        technos: [],
        link: "",
        git: false
    },
];


export default projects