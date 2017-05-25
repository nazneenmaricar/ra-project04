import { NgModule} from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdventureBlogComponent } from './adventure-blog/adventure-blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleAdventurePostComponent } from './single-adventure-post/single-adventure-post.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';


const routes: Routes =[
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'adventure-blog', component: AdventureBlogComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'single-adventure-post/:id', component: SingleAdventurePostComponent},
  { path: 'adventure-list',  component: AdventureListComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
