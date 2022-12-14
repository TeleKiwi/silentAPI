import { existsSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "path";

export class SilentAPI {
    /** Get a piece of data. */
    get(id: string, callback: Function) {
        id = id.split("/")[1];
        id += ".json";
        const finalPath = join("./data/", id);
        const data = readFileSync(finalPath);
        callback(data.toString());
    }

    /** Make a piece of data. */
    post(data: object, id: string, callback: Function) {
        const path = ["./data", id, ".json"].join("");
        writeFileSync(path, JSON.stringify(data), 'utf-8');
        callback();
    }
    
    /** Modify an already existing piece of data. */
    patch(data: object, id: string, callback: Function) {
        const path = ["./data", id, ".json"].join("");
        if(existsSync(path)) {
            writeFileSync(path, JSON.stringify(data), 'utf-8');
        }
        callback();
    }

    /** Delete a piece of data. */
    delete(id: string, callback: Function) {
        const path = ["./data", id, ".json"].join("");
        unlinkSync(path);
        callback();
    }
    
}

