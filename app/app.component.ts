import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <favorite [is-favorite]="post.isFavorite"
     (change)="onFavoriteChange($event)"></favorite>
     <like [is-liked]="post.isLiked" [numberOfLikes]="post.numberOfLikes"
     (change)="onLikedChange($event)"></like>
     <vote (vote)="onVote($event)" [voteCount]="vote.voteCount"></vote>
    <twitter></twitter>        `
})
export class AppComponent {

    onLikedChange($event){
        console.log($event);
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }

    post = {
        numberOfLikes: 10,
        isFavorite: true,
        isLiked: false
    }

    vote = {
        voteCount: 10,
    }
}
