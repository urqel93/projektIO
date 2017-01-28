import {Component} from '@angular/core';

@Component({
    selector: 'twitter',
    templateUrl: 'app/components/twitter/twitter.template.html',
    styleUrls: ['app/components/twitter/twitter.css']
})

export class TwitterComponent {

    post = {
        isLiked: false,
        numberOfLikes: 10
    }

    onLikedChange($event){
        console.log($event);
    }

}