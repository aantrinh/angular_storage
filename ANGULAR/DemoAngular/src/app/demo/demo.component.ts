import { Component } from '@angular/core';

// decorator khai báo component
@Component({
    // 1 component gồm có 3 thành phần: html, css, typescript
    selector: 'app-demo',
//     template: `
// <h1>Demo Component</h1>
// <p>It is a demo component</p>
// `,
templateUrl: './demo.component.html',
// styles: [`
// h1{
//     color: red;
//     font-size: 100px
// }
// `]
styleUrls: ['./demo.component.scss']
})

export class DemoComponent {}