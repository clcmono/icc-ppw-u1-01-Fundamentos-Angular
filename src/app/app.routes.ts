import { Routes } from '@angular/router';
import { PerfilPage } from '../core/features/perfilPage/perfilPage';
import { HomePage } from '../core/features/homePage/homePage';
import { ProyectoDosPages } from '../core/features/proyectoDosPages/proyectoDosPages';
import { ProyectosPage } from '../core/features/proyectosPages/proyectosPages';
import { FormulariosPage } from '../core/features/formulariosPage/formulariosPage';


export const routes: Routes = [
    {
        path: "",
        component : HomePage
    },
  {
        path: "perfil",
        component : PerfilPage
    },
     {
        path: "proyecto",
        component : ProyectoDosPages
    },
  {
        path: "proyectoPages",
        component : ProyectosPage
    },
     {
        path: "formulariosPage",
        component : FormulariosPage
    },



   
];
