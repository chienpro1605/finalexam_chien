import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../service/player.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });

  constructor(private playerService: PlayerService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  submit() {
    const player = this.playerForm.value;
    this.playerService.savePlayer(player).subscribe(() => {
      this.playerForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['/player/list']);
    }, e => {
      console.log(e);
    });
  }

}
