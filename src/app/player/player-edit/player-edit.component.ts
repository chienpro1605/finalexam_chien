import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });
  id: any;

  constructor(private playerService: PlayerService ,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getPlayer(this.id);
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getPlayer(id: number) {
    return this.playerService.findById(id).subscribe(player => {
      this.playerForm = new FormGroup({
         name: new FormControl(player.name),
        champ: new FormControl(player.champ),
        kda: new FormControl(player.kda),
        des: new FormControl(player.des),
      });
    });
  }
  // tslint:disable-next-line:typedef
  updateBook(id: number) {
    const player = this.playerForm.value;
    this.playerService.updatePlayer(id, player).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['/player/list']);
    }, e => {
      console.log(e);
    });
  }
}
