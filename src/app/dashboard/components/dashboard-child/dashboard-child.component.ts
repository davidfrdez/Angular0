import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss',
})
export class DashboardChildComponent implements OnInit {
  @Input() text: string='';
  ngOnChanges(changes:SimpleChanges):void{
    console.log('Se cambio el dashboard-Child',changes);
  }

  ngOnInit(): void {
    console.log('Se inicalizo el dashboard-child');
  }
}
