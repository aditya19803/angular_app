import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private baseUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: string) {
    return this.http.get<any>(\`\${this.baseUrl}/\${id}\`);
  }

  update(id: string, data: any) {
    return this.http.post(\`\${this.baseUrl}/\${id}\`, data);
  }

  delete(id: string) {
    return this.http.post(\`\${this.baseUrl}/\${id}/delete\`, {});
  }
}