import { Routes } from '@angular/router';
import {MainComponent} from "./features/home/main/main.component";
import {ContactComponent} from "./features/contact/contact.component";
import {ArticleDetailComponent} from "./features/article-detail/article-detail.component";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'contato', component: ContactComponent},
  {path: 'artigo/:id', component: ArticleDetailComponent},
  {path: '**', redirectTo: ''},
];
