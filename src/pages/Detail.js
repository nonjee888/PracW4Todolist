import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import { get_todo_id } from "../redux/modules/todos";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos)
    console.log (todos)
    const {id} = useParams();

    useEffect(() => {
        dispatch(get_todo_id(id))},[dispatch, id]);

    return (
        <>
            <button
                onClick={() => {
                    navigate("/");
                }}>이전으로</button>
            <h3>ID:{id}</h3>
            <h1>할 일:{todos.title}</h1>
            <h3>내용:{todos.body}</h3>
        </>
    )
}

export default Detail;