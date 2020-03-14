import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-creator',
  templateUrl: './color-creator.component.html',
  styleUrls: ['./color-creator.component.scss']
})
export class ColorCreatorComponent implements OnInit {


  public color = "";

  constructor() { }

  ngOnInit() {

    this.color = changeColor();

  }



}

function changeColor() {

  let colors: string[] = ["black", "purple", "yellow"];
  let randomPos = randomInteger(0, colors.length-1)

  return colors[randomPos];
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

