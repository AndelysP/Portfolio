import { AiFillAndroid, AiOutlineAntDesign } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp, FaNodeJs, FaVuejs, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiMongodb, SiJsonwebtokens } from "react-icons/si";

// Projet Super Smash Bros
import duel1 from './assets/img-work/project3/screen1.webp';
import duel2 from './assets/img-work/project3/screen2.webp';
import duel3 from './assets/img-work/project3/screen3.webp';

// Projet Five Star's Booking
import fiveBackround from './assets/img-work/project4/background.webp';
import five1 from './assets/img-work/project4/screen1.webp';
import five2 from './assets/img-work/project4/screen2.webp';
import five3 from './assets/img-work/project4/screen3.webp';
import five4 from './assets/img-work/project4/screen4.webp';
import five5 from './assets/img-work/project4/screen5.webp';

// Projet Pied à Terre
import header4 from './assets/img-work/project1/background.webp';
import screen1 from './assets/img-work/project1/screen1.webp';
import screen2 from './assets/img-work/project1/screen2.webp';

// Projet BoredBrain
import headerBored from './assets/img-work/project2/background.webp';
import bored1 from './assets/img-work/project2/screen1.webp';
import bored2 from './assets/img-work/project2/screen2.webp';
import bored3 from './assets/img-work/project2/screen3.webp';

// Projet Anime 
import animeBackground from './assets/img-work/project5/background.webp';
import anime1 from './assets/img-work/project5/screen1.webp';
import anime2 from './assets/img-work/project5/screen2.webp';

// Projet Cartes
import cardBackground from './assets/img-work/project6/background.webp';
import card1 from './assets/img-work/project6/screen1.webp';
import card2 from './assets/img-work/project6/screen2.webp';

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
        img_project: [fiveBackround, five1, five2, five3, five4, five5],
        title: 'Five Star\'s Booking 🪐',
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
        img_header: animeBackground,
        img_project: [anime1, anime2],
        title: 'Anime Tracker App ⛩️',
        desc: 'Cette application permet de rechercher et de suivre ses animés préférées grâce à une fonctionnalité de recherche avec un suivi des épisodes. Il suffit de saisir le titre de l\'anime que vous recherchez et en un instant l\'algorithme vous fournira les résultats les plus pertinents. Il y a également une fonctionnalité de suivi des épisodes pour vous aider à garder une trace de votre progression. Plus besoin de vous demander où vous en êtes le site met automatiquement à jour le nombre d\'épisodes que vous avez visionnés. Profitez pleinement de vos animes en gardant une vue d\'ensemble claire sur les épisodes en cours.',
        technos: [<FaVuejs />, <FaCss3Alt />],
        link: 'https://animetrackerapp.vercel.app/',
        git: true
    },
    {
        id: 6,
        img_header: cardBackground,
        img_project: [card1, card2],
        title: 'Card Game App 🃏',
        desc: 'L\'application propose deux modes de jeu. Le premier mode vous invite à plonger dans le célèbre jeu de cartes "Bataille" où vous serez confronté à un adversaire virtuel. Mais ce n\'est pas tout ! Le second jeu vous met au défi de jouer une carte de même suite mais d\'une valeur supérieure à celle du bot pour remporter la partie.',
        technos: [<DiReact />, <FaSass />],
        link: "https://game-card-app.vercel.app/",
        git: true
    },
];


export default projects