import { FilialNewComponent } from './components/admin/filial-new/filial-new.component';
import { FilialEditComponent } from './components/admin/filial-edit/filial-edit.component';
import { QuestionsComponent } from './components/admin/questions/questions.component';
import { FilialsComponent } from './components/admin/filials/filials.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'main',
      component: HomeComponent
    },
    {
      path: 'admin',
      component: AdminComponent,
    },
    {
      path: 'admin/filials',
      component: FilialsComponent,
    },
    {
      path: 'admin/filials/add',
      component: FilialNewComponent
    },
    {
      path: 'admin/filials/edit',
      component: FilialEditComponent
    },
    {
      path: 'admin/questions',
      component: QuestionsComponent,
    },
    {
      path: 'screen',
      redirectTo: '/',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
