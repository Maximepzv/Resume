import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  faLinkedin = faLinkedin;

  ngOnInit() {
    library.add(faLinkedin);
  }

  linkedin() {
    window.open('https://linkedin.com/in/maximepzv/', '_blank');
  }

}
