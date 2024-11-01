import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboardchild',
  standalone: true,
  imports: [],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboardchild.component.html',
  styleUrl: './dashboardchild.component.scss'
})
export class DashboardchildComponent {

}
