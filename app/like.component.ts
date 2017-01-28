import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
     .no-like{
        color: #ccc
        }
        
     .like{
        color: deeppink;
            }
`]
})


export class LikeComponent {
    @Input() numberOfLikes = 0;
    @Input('is-liked') isLiked = false;

    @Output() change = new EventEmitter;

    onClick() {
        this.isLiked = !this.isLiked;
        this.change.emit({newValue: this.isLiked});
        this.numberOfLikes += this.isLiked? 1 : -1;
    }

}