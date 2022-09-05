import { readFileSync, writeFileSync } from "node:fs";
import { join } from "path";

function post(data: object, id: string, callback: Function) {
    const path = ["./data", id, ".json"];
    writeFileSync(path.join(""), JSON.stringify(data), 'utf-8');
    callback();
}

function get(id: string, callback: Function) {
    id = id.split("/")[1];
    id += ".json";
    const finalPath = join("./data/", id);
    const data = readFileSync(finalPath);
    callback(data.toString());
}

/*
post({ message: "test" }, "/testFile", () => {
    console.log("I did it!");
})

get("/testFile", (data: string) => {
    console.log(data);
}) */