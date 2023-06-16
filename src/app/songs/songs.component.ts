import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isNumericValidator } from '../validator/customValidator';



interface Song {
  name: string;
  singer: string;
  year: number | null;
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  song: Song = { name: ' ', singer: ' ', year: null };

  addingSongForm = this.fb.group({
    name: ['', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])],
    singer: ['', Validators.required],
    year: [null, Validators.compose([
      Validators.required,
      isNumericValidator()
    ])]
  });

  // addingSongForm = new FormGroup({
  //   name: new FormControl('', Validators.compose([
  //     Validators.required,
  //     Validators.minLength(6)
  //   ])),
  //   singer: new FormControl('', [
  //     Validators.required
  //   ]),
  //   year: new FormControl(null, Validators.compose([Validators.required])),
  // });

  songs: Song[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get name() {
    return this.addingSongForm.get('name');
  }

  get singer() {
    return this.addingSongForm.get('singer');
  }

  get year() {
    return this.addingSongForm.get('year');
  }

  handleSubmitAddSong() {
    this.songs.push(this.addingSongForm.value);
    this.addingSongForm.reset();
  }
}


