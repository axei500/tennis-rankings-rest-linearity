import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  @Input()
  newForm: boolean = false

  id = new FormControl("", [Validators.required]);
  name = new FormControl("", [Validators.required]);
  country = new FormControl("", [Validators.required]);
  age = new FormControl(0, [Validators.required]);
  points = new FormControl(0, [Validators.required]);
  tournamentsPlayed = new FormControl(0, [Validators.required]);

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id.setValue(+params['playerId']);
      this.playerService.getById(this.id.value).subscribe((player: Player) => {
        this.name.setValue(player.name)
        this.country.setValue(player.country)
        this.age.setValue(player.age)
        this.points.setValue(player.points)
        this.tournamentsPlayed.setValue(player.tournamentsPlayed)
        this.id.disable();
      });
    });
  }

  addPlayer(): void {
    if (this.name.valid && this.country.valid && this.age.valid && this.points.valid && this.tournamentsPlayed.valid) {
      this.playerService.create(new Player(0, this.name.value, this.country.value, this.age.value, this.points.value, this.tournamentsPlayed.value))
    }

  }

  savePlayer(): void {
    if (this.name.valid && this.country.valid && this.age.valid && this.points.valid && this.tournamentsPlayed.valid) {
      this.playerService.edit(new Player(this.id.value, this.name.value, this.country.value, this.age.value, this.points.value, this.tournamentsPlayed.value))
      this.router.navigateByUrl('players')
    }
  }

}
