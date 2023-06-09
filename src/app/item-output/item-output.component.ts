import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss']
})
export class ItemOutputComponent implements OnInit {
  // Sử dụng với thuộc tính muốn pass dữ liệu và set nó thành type EventEmitter
  // và cho Angular biết sự kiện này sẽ phát đi dữ liệu là string
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // Hàm phát đi sự kiện khi click button
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
