import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
appName = 'SecureApp';
  
  // Data array to keep the HTML clean and dynamic
  features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Optimized performance ensuring sub-second load times for your users.'
    },
    {
      icon: '🛡️',
      title: 'Secure by Default',
      description: 'Enterprise-grade security protocols protecting your data at every layer.'
    },
    {
      icon: '🎨',
      title: 'Modern Design',
      description: 'Beautifully crafted UI components that look stunning on any device.'
    }
  ];
}
