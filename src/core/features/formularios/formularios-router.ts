
import { FormulariosPage } from "./pages/formulariosPage/formulariosPage";
import { Routes } from '@angular/router';
import { FormulariosDinamicos } from "./pages/formulariosDinamicos/formulariosDinamicos";
import { MoreFormsPage } from "./pages/moreFormsPage/moreFormsPage";

export const formulariosRoutes: Routes = [
        {
            path: '',
            children: [
                {
                    path: 'basic',
                    title: 'FormulariosBásicos',
                    component: FormulariosPage,
                },

                {
                    path: 'dynamic',
                    title: 'FormulariosDinamicos',
                    component: FormulariosDinamicos,
                },
                {
                    path: 'more',
                    title: 'More',
                    component: MoreFormsPage,
                },
                {
                    path: '**',
                    redirectTo: 'basic',                    
                },

            ],
        },
    ];