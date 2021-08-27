import { Component, OnInit } from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../service/player.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {

  player: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id = 0;

  constructor(private playerService: PlayerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getBookById(this.id);
    });
  }
  // tslint:disable-next-line:typedef
  getBookById(id: number) {
    console.log(id);
    this.playerService.findById(id).subscribe( player => {
      this.player.patchValue(player);
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(id: number) {
    // @ts-ignore
    console.log(id);
    // const book1 = this.book.value;
    // tslint:disable-next-line:no-shadowed-variable
    this.playerService.deletePlayer(id).subscribe(() => {
      alert('xóa thành công');
      this.router.navigate(['/players/list']);
    });
  }

}
