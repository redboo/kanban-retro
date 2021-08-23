import { Component, EventEmitter, OnInit, Output } from '@angular/core';

enum colors {
  PINK = "#FF2F88",
  LIME = "#88FF2F",
  BLUE = "#2F88FF",
  PURPLE = "#FF2FF0",
  YELLOW = "#F0FF2F",
  AQUA = "#2FF0FF",
}

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {

  @Output() emitColor: EventEmitter<string> = new EventEmitter()

  colorsData = Object.values(colors)

  constructor() { }

  ngOnInit(): void { }

  onColorEmit(color: string) {
    this.emitColor.emit(color)
  }

}
