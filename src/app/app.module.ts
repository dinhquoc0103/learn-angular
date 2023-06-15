import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { PercentCharPipe } from './pipes/percent-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    PercentCharPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
