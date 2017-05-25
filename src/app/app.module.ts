import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdventureBlogComponent } from './adventure-blog/adventure-blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleAdventurePostComponent } from './single-adventure-post/single-adventure-post.component';
import { JournalDataService } from './service/journal-data.service';
import { AddJournalComponent } from './add-journal/add-journal.component';
import { SubmitEntryComponent } from './submit-entry/submit-entry.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JournalComponent } from './journal/journal.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdventureBlogComponent,
    HomepageComponent,
    SingleAdventurePostComponent,
    AddJournalComponent,
    SubmitEntryComponent,
    ShopComponent,
    HeaderComponent,
    FooterComponent,
    JournalComponent,
    AdventureListComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JournalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
