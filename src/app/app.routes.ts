import { Routes } from '@angular/router';
import { PerfilPage } from '../core/features/perfilPage/perfilPage';
import { HomePage } from '../core/features/homePage/homePage';

export const routes: Routes = [
    {
        path: "",
        component : HomePage
    },
  {
        path: "perfil",
        component : PerfilPage
    },
   
];
