import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  ngOnInit() {
    library.add(faLinkedin);
    library.add(faGithub);
  }

  linkedin() {
    window.open('https://linkedin.com/in/maximepzv/', '_blank');
  }

  github() {
    window.open('https://github.com/Maximepzv', '_blank');
  }

}
