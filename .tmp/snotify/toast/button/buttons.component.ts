import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {SnotifyService} from '../../snotify.service';
import {SnotifyToast} from '../snotify-toast.model';

@Component({
  selector: 'ng-snotify-button',
  template: "<div class=\"snotifyToast__buttons\"> <button type=\"button\" *ngFor=\"let button of toast.config.buttons\" [ngClass]=\"{'snotifyToast__buttons--bold': button.bold}\" (click)=\"button.action ? button.action(toast) : remove()\"> {{button.text}} </button> </div> ",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

/**
 * Buttons component
 */
export class ButtonsComponent {
  /**
   * Get buttons Array
   */
  @Input() toast: SnotifyToast;
  constructor(private service: SnotifyService) {}

  /**
   * remove toast
   */
  remove() {
    this.service.remove(this.toast.id);
  }
}
