
import supanote from '../assets/projects/supanote.png'
import test from '../assets/projects/test.png'

export const projects = [
  {
    id: 1,
    title: "SupaNote",
    link: "https://supa-note.netlify.app/login",
    image: supanote,
    description:
      "Aplicación de notas Full-Stack utilizando Springboot, MySql y React, asegurando la aplicación utilizando autenticación basada en JWT con Spring Security.",
    stack: "Java · SpringBoot · React · MySql · Tailwind CSS"
  },
  {
    id: 2,
    title: "SkyVault",
    link: "<Direccion de github>",
    image: test,
    description:
      "Aplicación móvil de aviación desarrollada con React Native y Expo, diseñada para registrar avistamientos de aeronaves, almacenar fotografías y gestionar información asociada a cada registro. Integra Firebase para autenticación y almacenamiento en la nube.",
    stack: "React Native · Expo · Firebase · RapidAPI"
  },
  {
    id: 3,
    title: "Portafolio",
    link: "/",
    image: test,
    description:
      "Portafolio personal inspirado en el famoso buscador de Google.",
    stack: "React · Tailwind CSS"
  },
  
];