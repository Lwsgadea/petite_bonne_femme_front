import { Component, OnInit, Input } from '@angular/core';

import { Game } from 'src/app/interfaces/games';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.sass']
})
export class GamePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
