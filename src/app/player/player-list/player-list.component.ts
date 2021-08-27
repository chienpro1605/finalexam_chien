import { Component, OnInit } from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.playerService.getAll().subscribe(players => {
      this.players = players;
    });
  }


}
