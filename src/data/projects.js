
import supanote from '../assets/projects/supanote.png'
import skyvault from '../assets/projects/SkyVault.png'
import portfolio from '../assets/projects/portfolio.png'

export const projects = [
  {
    id: 1,
    titleKey: "searchResultItem.todo.title.supaNote",
    link: "https://supa-note.netlify.app/login",
    image: supanote,
    descriptionKey:
      "searchResultItem.todo.descripcion.supaNote",
    stack: "Java · SpringBoot · React · MySql · Tailwind CSS"
  },
  {
    id: 2,
    titleKey: "searchResultItem.todo.title.skyVault",
    link: "https://github.com/Mallarino/SkyVault",
    image: skyvault,
    descriptionKey:
    "searchResultItem.todo.descripcion.skyVault",
    stack: "React Native · Expo · Firebase · RapidAPI"
  },
  {
    id: 3,
    titleKey: "searchResultItem.todo.title.portafolio",
    link: "/",
    image: portfolio,
    descriptionKey:
      "searchResultItem.todo.descripcion.portafolio",
    stack: "React · Tailwind CSS"
  },
  
];