import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterFormService {
  isActive = false;
  filterApplied = false;

  toggleActive() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = '';
  }
}
