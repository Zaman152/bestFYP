// home.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private toggleSignupSource = new Subject<void>();

  toggleSignup$ = this.toggleSignupSource.asObservable();

  toggleSignup() {
    this.toggleSignupSource.next();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  showSignup: boolean = false;
  private subscription: Subscription;

  constructor(private communicationService: CommunicationService) {
    this.subscription = this.communicationService.toggleSignup$.subscribe(() => {
      this.toggleSignup();
    });
  }

  toggleSignup() {
    this.showSignup = !this.showSignup;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
