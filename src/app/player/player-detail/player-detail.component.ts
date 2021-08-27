import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });
  id: any;
  constructor(private playerService: PlayerService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getPlayerById(this.id);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getPlayerById(id: number) {
    return this.playerService.findById(id).subscribe(player => {
      this.playerForm = new FormGroup({
        id: new FormControl(player.id),
        name: new FormControl(player.name),
        champ: new FormControl(player.champ),
        kda: new FormControl(player.kda),
        des: new FormControl(player.des),
      });
    });
  }

}
