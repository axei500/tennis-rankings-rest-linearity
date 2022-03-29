import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input()
  newForm : boolean = true

  name = new FormControl("", [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

}
