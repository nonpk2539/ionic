import { Component, Element, Event, EventEmitter, Method, Prop } from '@stencil/core';
import { Side, isRightSide } from '../../utils/helpers';


@Component({
  tag: 'ion-item-options',
  styleUrls: {
    ios: 'item-options.ios.scss',
    md: 'item-options.md.scss'
  }
})
export class ItemOptions {
  @Element() private el: HTMLElement;

  /**
   * The side the option button should be on. Defaults to `"right"`.
   * If you have multiple `ion-item-options`, a side must be provided for each.
   */
  @Prop() side: Side = 'end';

  /**
   * Emitted when the item has been fully swiped.
   */
  @Event() ionSwipe: EventEmitter;

  @Method()
  isRightSide() {
    return isRightSide(this.side);
  }

  @Method()
  width(): number {
    return this.el.offsetWidth;
  }

  @Method()
  fireSwipeEvent(value: any) {
    this.ionSwipe.emit(value);
  }

  hostData() {
    return {
      class: {
        'item-options-left': !this.isRightSide(),
        'item-options-right': this.isRightSide()
      }
    };
  }

}
