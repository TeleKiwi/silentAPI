import { SilentAPI } from "./main";

const api = new SilentAPI();

api.post({ message: "test" }, "/testFile", () => {
    console.log("I did it!");
})

api.get("/testFile", (data: string) => {
    console.log(data);
}) 

api.patch({ message: "wow, it's different now!"}, "/testFile", () => {
    console.log("It changed!");
})

api.get("/testFile", (data: string) => {
    console.log(data);
}) 

api.delete("/testFile", () => {
    console.log("It's gone now...")
}) 

api.post({bestNumber: 1748}, "/folder/nested", () => {
    console.log("We need to go deeper!")
})