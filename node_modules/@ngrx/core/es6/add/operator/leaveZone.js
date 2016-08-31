import { Observable } from 'rxjs/Observable';
import { leaveZone } from '../../operator/leaveZone';
Observable.prototype.leaveZone = leaveZone;
