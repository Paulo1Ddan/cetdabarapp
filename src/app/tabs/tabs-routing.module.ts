import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs/pg',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pg/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'sobre',
        loadChildren: () => import('../pg/sobre/sobre.module').then( m => m.SobrePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pg/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../pg/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../pg/blog/blog.module').then( m => m.BlogPageModule)
      },
      {
        path: 'provas',
        loadChildren: () => import('../pg/provas/provas.module').then( m => m.ProvasPageModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../pg/cursos/cursos.module').then( m => m.CursosPageModule)
      },
      {
        path: 'detalhe-curso/:idCurso',
        loadChildren: () => import('../pg/detalhe-curso/detalhe-curso.module').then( m => m.DetalheCursoPageModule)
      },
      {
        path: 'detalhe-blog/:idArtigo',
        loadChildren: () => import('../pg/detalhe-blog/detalhe-blog.module').then( m => m.DetalheBlogPageModule)
      },
      {
        path: 'cadastro',
        loadChildren: () => import('../pg/cadastro/cadastro.module').then( m => m.CadastroPageModule)
      },
      {
        path: 'alterar-dados',
        loadChildren: () => import('../pg/alterar-dados/alterar-dados.module').then( m => m.AlterarDadosPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pg/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pg/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
