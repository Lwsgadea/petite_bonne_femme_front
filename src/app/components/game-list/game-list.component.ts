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

  constructor(
    private gameService: GamesService,
    private formatService: FormatService
  ) { }

  ngOnInit(): void {
    this.gameService.getGame().subscribe((data) => {
      this.requestFormat(data)
    })
  }

  requestFormat(data: Object) {
    let gamesRequest = this.formatService.formatRequest(data);
    
    // To return arrays for games and request infos
    this.games = this.formatService.requestGames(gamesRequest) 
    this.infos = this.formatService.requestInfos(gamesRequest)
    console.log(this.games, this.infos)
  }
}
 