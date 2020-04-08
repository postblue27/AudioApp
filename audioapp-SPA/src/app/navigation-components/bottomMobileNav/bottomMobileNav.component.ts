import { Component, OnInit } from '@angular/core';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottomMobileNav',
  templateUrl: './bottomMobileNav.component.html',
  styleUrls: ['./bottomMobileNav.component.css']
})
export class BottomMobileNavComponent implements OnInit {
  faCompactDisc = faCompactDisc;
  faUser = faUser;
  faHome = faHome;
  faSearch = faSearch;
  constructor() { }

  ngOnInit() {
  }

}
