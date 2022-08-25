// 이니셜스테이트

const initialState = {
    todos: [{
        id:"0",
        title: "리덕스 연습하자",
        body: "어렵네",
        isDone: false
    },
    {
        id:"1",
        title: "공부우우우",
        body: "재미이이이있다다다다",
        isDone: false
    }]
}

// 액션밸류

const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"
const REMOVE_TODO = "REMOVE_TODO"
const GET_TODO_ID = "GET_TODO_ID"

// 액션크리에이터

export const add_todo = (payload) => {
    return {
        type : ADD_TODO,
        payload: payload,
    };
};

export const toggle_todo = (payload) => {
    return {
        type : TOGGLE_TODO,
        payload: payload,
    };
};

export const remove_todo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload: payload,
    };
};

export const get_todo_id = (payload) => {
    return{
        type: GET_TODO_ID,
        payload: payload,
    };
};

// 리듀서

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if(todo.id == action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    } else {
                        return todo;
                    }
                }),
            };
            
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload,)
            }
            
        case GET_TODO_ID:
            return {
                ...state,
                todos: state.todos.find((todo) => {
                    return todo.id == action.payload;
                })
            };
            
    default:
        return state;

    };
};

//함수들
export default todos;