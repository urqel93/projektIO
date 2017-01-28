import {Injectable} from '@angular/core';

@Injectable()
export class TwitterService{
    getAuthors() :string[]{
        return ['author1', 'author2', 'author3'];
    }

        author1:{
            nick: 'Ally',
            subject: 'What is it?',
            description: 'Can any one can sayh what is it?',
            image: 'http://lorempixel.com/100/100/animals/1/',
            totalLikes: 10,
            isLiked: false
        }
        author2:{
            nick: 'Noah',
            subject: 'Hello!',
            description: 'Hello every one!',
            image: 'http://lorempixel.com/100/100/animals/2/',
            totalLikes: 10,
            isLiked: true
        }
        author3:{
            nick: 'Mick',
            subject: 'What you up to?',
            description: 'What  do you do today',
            image: 'http://lorempixel.com/100/100/animals/3/',
            totalLikes: 10,
            isLiked: false
        }
}