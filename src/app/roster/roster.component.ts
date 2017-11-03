import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {



  constructor(private router: Router) { }

  players: Player[] = [

  ];

  ngOnInit() {
  }

  goToDetailPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  };

}
