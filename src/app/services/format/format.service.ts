import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Infos, gameOption } from 'src/app/interfaces/games';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  public games: Game[] = [];
  public infos: Infos[] = [];
  public gameOptions: gameOption[] = [];

  public game: Game = {
    id: 0,
    title: '',
    description: '',
    genre: {
      id: 0,
      uri: '',
      type: '',
      name: ''
    },
    platform: {
      id: 0,
      uri: '',
      type: '',
      name: ''
    },
    editor: {
      id: 0,
      uri: '',
      type: '',
      name: ''
    },
    type: {
      id: 0,
      uri: '',
      type: '',
      name: ''
    },
    releaseDate: '',
    online: false
  };

  constructor() { }

  formatRequest(data: any) {
    let arr: any[] = Object.keys(data).map(index => ([
      data[index]
    ]))
    return arr;
  }

  requestGames(arr: any[]) {
    // Keep only array with games
    this.games = arr[3][0]
    // Iterates through games
    for(let i = 0; i < this.games.length; i++) {
      // iterates through each game
      for(let i = 0; i < Object.keys(this.games[i]).length; i++) {
        this.game = {
          id: this.games[i].id,
          title: this.games[i].title,
          description: this.games[i].description,
          releaseDate: this.games[i].releaseDate,
          platform: this.games[i].platform,
          type: this.games[i].type,
          genre: this.games[i].genre,
          editor: this.games[i].editor,
          online: this.games[i].online
        }
      }
    }
    return this.games;
  }

  requestInfos(arr: any[]) {
    // To get the games themselves out and keep request infos only
    for(let elt of arr) {
      if(typeof(elt[0]) != 'object') {
        //  console.log(elt[0])
        this.infos.push(elt[0])
      }
    }
    return this.infos
  }
}
