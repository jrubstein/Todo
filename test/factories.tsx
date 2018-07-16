import { Item } from "../src/views/reducers/Store";
import * as uuid from 'uuid/v4'

export const createItem = (data?: Partial<Item>) => {
    return {
        id: uuid(),
        content: 'content',
        completed: false,
        createdAt: new Date(),
        ... data
    }
}