import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { SongsComponent } from './components/songs/songs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    PhotosComponent,
    AlbumsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'songs', component: SongsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'home', component: HomeComponent }
    ]),
    BrowserAnimationsModule,
    MaterialModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
