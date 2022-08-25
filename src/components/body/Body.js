import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { remove_todo, toggle_todo } from "../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const Body = () => {
    const dispatch = useDispatch();
    const navi = useNavigate();
    const todos = useSelector((state) => state.todos.todos)
    console.log(todos)

    const onRemove = (id) => {
        dispatch(remove_todo(id))
    }

    const onToggle = (id) => {
        dispatch(toggle_todo(id))
    }

    return (
        <>
            <div>
                <h1>열심히 하고있어요!</h1>
                {todos.map((todo) => {
                    console.log(todos)
                    if (todo.isDone === false)
                        return <TodoContainer key={todo.id}>
                            <p
                                key={todo.id}
                                onClick={() => {
                                    navi("/detail/" + todo.id)
                                }}
                            >상세보기</p>
                            <h1>{todo.title}</h1>
                            <p>{todo.body}</p>
                            <button onClick={() => { onRemove(todo.id) }}>
                                삭제</button>
                            <button onClick={() => { onToggle(todo.id) }}>
                                {todo.isDone ? "완료함" : "하는중!"}</button>
                        </TodoContainer>
                })}
            </div>
            <div>
                <h1>불태웠다!!!!!!!!</h1>
                {todos.map((todo) => {
                    if (todo.isDone === true)
                        return <TodoContainer key={todo.id}>
                            <p>상세보기</p>
                            <h1>{todo.title}</h1>
                            <p>{todo.body}</p>
                            <button onClick={() => { onRemove(todo.id) }}>
                                삭제</button>
                            <button onClick={() => { onToggle(todo.id) }}>
                                {todo.isDone ? "완료함" : "하는중!"}</button>
                        </TodoContainer>
                })}
            </div>
        </>
    )
}

export default Body;

const TodoContainer = styled.div`
    border: black 1px solid;
    height: 200px;
    width: 300px;
    border-radius: 15px;
`