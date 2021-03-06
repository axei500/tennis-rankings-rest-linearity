import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Name', 'Country', 'Age', 'Points', 'Tournaments Played', 'Actions'];
  players: Player[] = []
  panelOpenState = false;
  bootstrapPaginationSettings: { page: number, pageSize: number } = { page: 0, pageSize: 10 };
  hideForm: boolean = false;

  tableData = new MatTableDataSource<Player>(this.players);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playerService.players.subscribe((players: Player[]) => {
      this.players = players;
      this.tableData.data = players
      console.log(players)
    })
  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  edit(id: number) {
    this.router.navigateByUrl('player/' + id)
  }

  onCreate(): void {
    this.ngOnInit();
  }

  delete(id: number): void {
    this.playerService.delete(id);
    this.ngOnInit();
  }

}
