import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee.interface';

@Injectable({
  providedIn: 'root',
})
  
export class EmployeesService {
  employees!: Observable<Employee[]>;

  private employeesCollection: AngularFirestoreCollection<Employee>;

  constructor(private readonly afs: AngularFirestore) {
    this.employeesCollection = afs.collection<Employee>('employees');
    this.getEmployees();
  }

  onDeleteEmployees(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.employeesCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  onSaveEmployee(employee: Employee, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...employee };
        const result = await this.employeesCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }

  private getEmployees(): void { //this goes to firebase datase, search employees collection and later save thoses dates save in employees property
    this.employees = this.employeesCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Employee))
      );
  }
}
