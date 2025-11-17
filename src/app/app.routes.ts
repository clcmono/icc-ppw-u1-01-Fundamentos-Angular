import { Routes } from '@angular/router';
import { PerfilPage } from '../core/features/perfilPage/perfilPage';
import { HomePage } from '../core/features/homePage/homePage';
import { ProyectoDosPages } from '../core/features/proyectoDosPages/proyectoDosPages';
import { ProyectosPage } from '../core/features/proyectosPages/proyectosPages';
import { FormulariosPage } from '../core/features/formularios/pages/formulariosPage/formulariosPage';


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
        path: 'formulario',
         loadChildren: () =>
        import('../core/features/formularios/formularios-router')
        .then(m => m.formulariosRoutes),
    },

   
];
