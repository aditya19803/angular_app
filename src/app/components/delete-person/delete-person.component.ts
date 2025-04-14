import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html'
})
export class DeletePersonComponent implements OnInit {
  person: any;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.personService.getById(id!).subscribe(data => this.person = data);
  }

  confirmDelete() {
    this.personService.delete(this.person._id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}