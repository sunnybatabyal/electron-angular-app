import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
const fs = window.require('fs');
const {PythonShell} = window.require('python-shell');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electron-angular-app';

  constructor(private _electronService: ElectronService) { }

  public createDirectoryUsingElectron() {
    let dir = "/Users/sunny/workspace/my-electron-directory";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {
        recursive: true
      });
    }
  }

  public createDirectoryUsingPythonScript() {
    let pyshell = new PythonShell('/Users/sunny/workspace/electron/electron-angular-app/test.py');

    pyshell.on('message', function(message:any) {
        console.log(message);
    })

    pyshell.end(function (err:any) {
        if (err){
            throw err;
        };
        console.log('finished');
    });
  }
}
