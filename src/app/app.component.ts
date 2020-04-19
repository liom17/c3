import { Component } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CH04';
  shouldShow = false;
  score = 70;
  color: string;
  fontSize: string;



  cities = ['杭州', '上海', '南京', '无锡']

  onToggle() {
    this.shouldShow = !this.shouldShow;
    return false;
  }
  grade() {
    return Math.floor(this.score / 10);
  }
  onInput(evt: Event) {
    const inputEle = <HTMLInputElement>evt.target;
    this.score = Number(inputEle.value);
  }

  apply(color: string, fontSize: string) {
    this.color = color;
    this.fontSize = fontSize;

  }
}
