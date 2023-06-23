import { Component, OnInit } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private deviceService: DeviceService) {
  }
  ngOnInit(): void {
    this.getDevices();
  }

  title = 'basics-assignment-1-start';
  deviceList: any[] = [];

  clickedListener($event: any) {
    alert($event + " " + " listener");
  }

  getDevices() {
    this.deviceService.getDeviceList().subscribe({
      next: (res: any) => {
        this.deviceList = res;
      }
    })
  }
}
