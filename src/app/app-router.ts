import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdventureBlogComponent } from './adventure-blog/adventure-blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleAdventurePostComponent } from './single-adventure-post/single-adventure-post.component';


const router: Routes =[
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'adventure-blog', component: AdventureBlogComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'single-adventure-post', component: SingleAdventurePostComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(router) ],
  exports: [ RouterModule ]
})

export class AppRouter {}
