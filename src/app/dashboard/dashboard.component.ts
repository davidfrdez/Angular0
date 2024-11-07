import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  text = 'dashboard';

  // COMO SE PUEDE HACER CON UN CAMBIO DE SERVICIO
  // constructor(cd :ChangeDetectorRef){
  //   setTimeout(()=>{
  //     debugger
  //     this.text='Dashboard text changed'
  //     cd.detectChanges();
  //   },5000)
  // }
  handleClick(){
    this.text='Dashboard tex change'
  }
}
