import {
  ChangeDetectionStrategy, Component, Input,
  ViewEncapsulation
} from '@angular/core';
import {SnotifyToast} from '../snotify-toast.model';

@Component({
  selector: 'ng-snotify-prompt',
  template: "<span class=\"snotifyToast__input\" [ngClass]=\"{'snotifyToast__input--filled': isPromptFocused}\"> <input (input)=\"toast.value = $event.target.value; toast.eventEmitter.next('input')\" autofocus class=\"snotifyToast__input__field\" type=\"text\" [id]=\"toast.id\" (focus)=\"isPromptFocused = true\" (blur)=\"isPromptFocused = !!toast.value.length;\"/> <label class=\"snotifyToast__input__label\" [for]=\"toast.id\"> <span class=\"snotifyToast__input__labelContent\">{{toast.config.placeholder | truncate}}</span> </label> </span> ",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

/**
 * Prompt component. Part of PROMPT type
 */
export class PromptComponent {
  /**
   * Get PROMPT placeholder
   */
  @Input() toast: SnotifyToast;
  /**
   * Is PROMPT focused
   * @type {boolean}
   */
  isPromptFocused = false;
}
