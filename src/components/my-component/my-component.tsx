import { Component,Prop, Host,h } from '@stencil/core';
import "@ui5/webcomponents/dist/Button.js";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})

export class MyComponent {
  @Prop() mytext ='default';
  @Prop() mytext2 ='default2';
  @Prop() myfunc: () => void;

  render() {
    return (
    <Host>
      <span>Hello</span>
      <div>{this.mytext}</div>
      <div>{this.mytext2}</div>
      <ui5-button onClick={this.myfunc}>Button</ui5-button>
    </Host>
    );
  }
}
