import { createSlice, nanoid } from "@reduxjs/toolkit";

interface IArr{
    id: string,
    title: string,
    count: number
}

let str: string | null = localStorage.getItem('product')
let arr: Array<IArr>
if(str){
    arr = JSON.parse(str)
} else {
    arr = []
}

export interface productSlice {
    value: Array<IArr>
    count: number
}

let initialState: productSlice = {
    value: arr,
    count: 1
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        add: (s, a) => {
            if (a.payload) {
                const { title, count } = a.payload;
                s.value.push({
                    id: nanoid(),
                    title,
                    count
                });

                localStorage.setItem('product', JSON.stringify(s.value));
            }
        }
    }
});

export default productSlice.reducer;
export let { add } = productSlice.actions;
