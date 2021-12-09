import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../../services/games-service/games.service';
import { Game, Infos, gameOption } from '../../interfaces/games';
import { FormatService } from 'src/app/services/format/format.service';
import { OptionsService } from 'src/app/services/options-service/options.service';

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
    private formatService: FormatService,
    private optionsService: OptionsService
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((data) => {
      this.gameRequestFormat(data)
    })
    this.optionsService.getEditors().subscribe((editors) => {
      this.optionRequestFormat(editors)
    })
    this.optionsService.getPlatforms().subscribe((platforms) => {
      console.log(platforms)
    })
    this.optionsService.getTypes().subscribe((types) => {
      console.log(types)
    })
    this.optionsService.getGenres().subscribe((genres) => {
      console.log(genres)
    })
  }

  gameRequestFormat(data: Object) {
    // Call from API
    let gamesRequest = this.formatService.formatRequest(data);
    
    // Isolate games array
    let gamesArray = this.formatService.requestGameList(gamesRequest)
    // Type and format games & game options
    gamesArray.forEach((game: any) => this.formatService.formatGames(game))
    this.games = gamesArray
    // Isolate request infos
    this.infos = this.formatService.requestInfos(gamesRequest)
  }

  optionRequestFormat(option: any) {
    console.log(this.formatService.formatGameOption(option), 'optionf format')
  }
}
 