import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})

export class AdminComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(firstName: string, lastName: string, position: string, bio: string){
    var newPlayer: Player = new Player(firstName, lastName, position, bio);
    this.playerService.addPlayer(newPlayer);
  }

}
