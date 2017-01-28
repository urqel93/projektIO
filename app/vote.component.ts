import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'vote',
    templateUrl: 'app/vote.template.html',
    styleUrls: ['app/vote.css']
})

export class VoteComponent {
    @Input() myVote = 0;
    @Input() voteCount = 0;

    @Output() vote = new EventEmitter();

    onClickYes(){
        if(this.myVote == 1) {
            return
        }
        this.myVote++;
        this.vote.emit({myVote: this.myVote});

    }

    onCLickNo(){

        if(this.myVote == -1) {
            return
        }
        this.myVote--;
        this.vote.emit({myVote: this.myVote});


    }

}