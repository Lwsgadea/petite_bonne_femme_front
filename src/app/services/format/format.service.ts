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
    genres: [{
      id: 0,
      uri: '',
      name: ''
    }],
    platforms: [{
      id: 0,
      uri: '',
      name: ''
    }],
    editors: [{
      id: 0,
      uri: '',
      name: ''
    }],
    types: [{
      id: 0,
      uri: '',
      name: ''
    }],
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

  requestGameList(arr: any[]) {
    // Keep only array with games
    let games = arr[3][0];
    return games;
  }

  formatGames(game: any) {
    this.game = {
      id: game.id,
      title: game.title,
      description: game.description,
      releaseDate: game.releaseDate,
      platforms: this.formatGameOption(game.platforms),
      types: this.formatGameOption(game.types),
      genres: this.formatGameOption(game.genres),
      editors: this.formatGameOption(game.editors),
      online: game.online
    }
    return this.game;
    
  }

  formatGameOption(options: any[]) {
    // Iterate through games
    for(let i = 0; i < options.length; i++) {
      // Keep wanted properties 
      for(let [key, value] of Object.entries(options[i])) {
        if(key === '@id') {
          options[i] = {
            id: options[i].id,
            name: options[i].name,
            uri: value,
            games: options[i].game
          }}}}
    return options;
  }

  requestInfos(arr: any[]) {
    // To get the games themselves out and keep request infos only
    for(let elt of arr) {
      if(typeof(elt[0]) != 'object') {
        this.infos.push(elt[0])
      }
    }
    return this.infos
  }
}
