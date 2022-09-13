import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pg/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pg/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pg/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pg/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'provas',
    loadChildren: () => import('./pg/provas/provas.module').then( m => m.ProvasPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pg/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pg/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'detalhe-curso',
    loadChildren: () => import('./pg/detalhe-curso/detalhe-curso.module').then( m => m.DetalheCursoPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pg/blog/blog.module').then( m => m.BlogPageModule)
  },  {
    path: 'detalhe-blog',
    loadChildren: () => import('./pg/detalhe-blog/detalhe-blog.module').then( m => m.DetalheBlogPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pg/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'alterar-dados',
    loadChildren: () => import('./pg/alterar-dados/alterar-dados.module').then( m => m.AlterarDadosPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
