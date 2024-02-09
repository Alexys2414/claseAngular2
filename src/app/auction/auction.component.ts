import { Component, Input, OnInit } from '@angular/core';
import { Auction, User } from '../types';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent implements OnInit {
  @Input() auction: Auction;

  date = new Date();
  isLive: boolean = false;
  userName: string = '';

  constructor(private userService: UserService) {
    this.auction = {} as Auction;
  }

  ngOnInit(): void {
    this.findUserById(this.auction.userId);
    this.auction.startsAt = new Date(this.auction.startsAt);
    this.auction.endsAt = new Date(this.auction.endsAt);
    if (this.auction.startsAt < this.date && this.auction.endsAt > this.date) {
      this.isLive = true;
    }
  }

  findUserById(id: number): void {
    this.userService.findById(id).subscribe(user => {
      this.userName = '@' + (user?.userName || 'unknown');
    });
  }
}