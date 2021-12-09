import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { OptionsService } from 'src/app/services/options-service/options.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.sass']
})
export class GameFormComponent implements OnInit {

  GameForm = new FormGroup({
    title: new FormControl(''),
    releaseDate: new FormControl(''),
    description: new FormControl(''),
    genres: new FormControl(''),
    types: new FormControl(''),
    editors: new FormControl(''),
    platforms: new FormControl('')
  })

  constructor(private optionsService: OptionsService ) { }

  ngOnInit(): void {
    this.optionsService.getEditors().subscribe((editors) => {
      console.log(editors)
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

  onSubmit() {
    console.warn(this.GameForm.value)
  }

}
