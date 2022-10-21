import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
const fs = window.require('fs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-angular-app';

  constructor(private _electronService: ElectronService) { }

  public createDirectory() {
    let dir = "/Users/sunny/workspace/HelloWorld";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true
      });
    }
  }
}
