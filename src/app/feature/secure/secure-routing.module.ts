import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
    {
        path: '',
        component: SecureComponent,
        children: [
            {
                path: 'generate-reports',
                loadChildren: () => import('./generate-reports/generate-reports.module').then(m => m.GenerateReportsModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'dev-guide',
                loadChildren: () => import('./dev-guide/dev-guide.module').then(m => m.DevGuideModule)
            },
            {
                path: '**',
                redirectTo: 'generate-reports', pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecureRoutingModule { }
