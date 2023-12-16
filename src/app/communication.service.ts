// communication.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
