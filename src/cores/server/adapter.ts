import { INestApplication } from "@nestjs/common";
import { v4 } from 'uuid';
type Registration = {
    [key in string] : Function;
}

export class Adapter {
    static registrations: Registration = {};
    static register(cb: Function) {
        this.registrations[v4] = cb;
    } 

    static async assembly(app: INestApplication) {
        for (const _key in this.registrations) {
            const callback = this.registrations[_key];
            if (typeof callback === 'function') {
                callback(app);
            }
        }
    }
}