import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../services/games-service/games.service';
import { Game, Infos, gameOption } from '../../interfaces/games';
import { FormatService } from 'src/app/services/format/format.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

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

  constructor(
    private gameService: GamesService,
    private formatService: FormatService
  ) { }

  ngOnInit(): void {
    this.gameService.getGame().subscribe((data) => {
      this.requestFormat(data)
    })
  }

  requestFormat(request: Object) {
    let gamesRequest = this.formatService.formatRequest(request);
    
    // To return arrays for games and request infos
    this.games = this.formatService.requestGames(gamesRequest) 
    this.infos = this.formatService.requestInfos(gamesRequest)
    console.log(this.games, this.infos)
  }

}
 