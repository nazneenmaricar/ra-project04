import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouter} from './app-router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdventureBlogComponent } from './adventure-blog/adventure-blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JournalViewComponent } from './journal-view/journal-view.component';
import { SingleAdventurePostComponent } from './single-adventure-post/single-adventure-post.component';
import { JournalDataService } from './service/journal-data.service';
import { JournalPost } from './service/journal-post';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdventureBlogComponent,
    HomepageComponent,
    JournalViewComponent,
    SingleAdventurePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [JournalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
