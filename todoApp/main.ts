import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { todoAppModule } from './todoApp.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(todoAppModule);