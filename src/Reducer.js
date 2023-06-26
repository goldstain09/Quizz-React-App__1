let a = 0;
let b = 0;
let c = 0;
let name ='';

const QuizReducer = (state, action) => {
    switch (action.type) {
        case 'Easy':
            a = action.payload
        case 'Normal':
            b = action.payload
        case 'Hard':
            c = action.payload
        case 'result':
            state = a + b + c
            return state
        case 'name':
            name = action.payload
        case 'separateMarks':
            state = {
                easy: a,
                normal: b,
                hard: c,
                name:name
            }
            return state

        default:
            return state;
    }
}

export default QuizReducer;