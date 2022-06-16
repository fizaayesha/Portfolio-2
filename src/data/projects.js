import faceRecognition from "../Assets/FaceRecognition.jfif";
import Banking from '../Assets/Online Bnaking.avif'
import Pokemon from '../Assets/Pokemon.jfif'

const projects = [
  {
    id: 1,
    category: "Backend",
    image: faceRecognition,
    code: "https://github.com/fizaayesha/face-recognition",
    title: "Face Recognition",
    text: "Face Recognition for Secure Transactions",
  },
  {
    id: 2,
    category: "Backend",
    image: Banking,
    code: "https://github.com/fizaayesha/gripbank-frontend",
    visit: "https://grip-banking-webapp.netlify.app/",
    title: "Online Banking System",
    text: "Showcase of online banking system",
  },
  {
    id: 3,
    category: "Api",
    image: Pokemon,
    code: "https://github.com/fizaayesha/pokemon",
    visit: "https://pocket-monsters.netlify.app/",
    title: "Pokemon-Pocket Monsters",
    text: "Features of Pokemons",
  },
];

export default projects;
