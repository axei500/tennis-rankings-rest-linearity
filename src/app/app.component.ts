import { Component } from '@angular/core';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tennis-rankings-rest-linearity';

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.playerService.get();
  }
}
