import { Message } from "@/types/Message";

type addAction = {
    type: "add";
    payload:{
        user: string;
        text: string;
    }
}

type ChatActions = addAction;


export const chatReducer = (state: Message[], action: ChatActions) => {
    switch(action.type){
        case "add":
            return [...state, {
                id: state.length + 1,
                user: action.payload.user,
                text: action.payload.text
            }];
        default:
            return state;
    }
}