import { say as sayBlack } from "my-a";
import { sayRed } from "my-b";

export function say(message) {
    if(message.startsWith('red:')){
        sayRed(message.substring(4))
    }else sayBlack(message)
}