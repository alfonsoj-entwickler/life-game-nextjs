export default function randomModelCell(limit: number = 10):number{
    // Returns a random integer from 1 to limit:
    return Math.floor(Math.random() * limit) + 1;
}