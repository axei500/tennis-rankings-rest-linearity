import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayersComponent } from './players/players.component';
import { TopRankingComponent } from './top-ranking/top-ranking.component';

const routes: Routes = [
  { path: '', component: TopRankingComponent },
  { path: 'top', component: TopRankingComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'qr-code/:playerId', component: PlayerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
