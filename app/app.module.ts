import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';
import {AppComponent}   from './app.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AuthorService} from "./author.service";
import {AutoGrowDirective} from './auto-grow.directive';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TwitterComponent} from './components/twitter/twitter.component';
import {TwitterService} from './components/twitter/twitter.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        CoursesComponent,
        AuthorsComponent,
        AutoGrowDirective,
        FavoriteComponent,
        LikeComponent,
        VoteComponent,
        TwitterComponent],
    bootstrap: [AppComponent],
    providers: [
        AuthorService,
        TwitterService],
})
export class AppModule {
}
