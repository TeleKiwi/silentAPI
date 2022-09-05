import { SilentAPI } from "./main";

const api = new SilentAPI();

api.post({ message: "test" }, "/testFile", () => {
    console.log("I did it!");
})

api.get("/testFile", (data: string) => {
    console.log(data);
}) 

api.get("/filethatdoesntexist", (data: string) => {
    console.log("oh dear!")
})