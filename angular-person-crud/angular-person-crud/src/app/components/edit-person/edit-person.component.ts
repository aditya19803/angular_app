import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getById(id!).subscribe(data => this.person = data);
  }

  update() {
    this.personService.update(this.person._id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}