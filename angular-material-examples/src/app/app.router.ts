import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { AngularExamplesComponent } from './angular/features/angular-examples.component';
import { MaterialCheckboxExampleComponent } from './angular/material-checkbox-example/material-checkbox-example.component';
import { HtmlCssExamplesComponent } from './htmlcss/html-css-examples/html-css-examples.component';
import { BorderComponent } from './htmlcss/features/border/border.component';
import { ImagensComponent } from './htmlcss/features/imagens/imagens.component';



// import { ContatoComponent } from './institucional/contato/contato.component';
// import { SobreComponent } from './institucional/sobre/sobre.component';
// import { DataBindingComponent } from './demos/data-binding/data-binding.component';
// import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}, 
    { path: 'angular', component: AngularExamplesComponent },
    { path: 'checkbox', component: MaterialCheckboxExampleComponent },
    { path: 'html-css', component: HtmlCssExamplesComponent},
    { path: 'border', component: BorderComponent},
    { path: 'imagens', component: ImagensComponent}

];