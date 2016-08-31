import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app.component';
import {YouTubeService} from "./services/youtube.service";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    YouTubeService
]);
