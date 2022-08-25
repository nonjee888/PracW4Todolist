import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { add_todo } from "../../redux/modules/todos";

let id = 3;
const Head = () => {

    const dispatch = useDispatch();
    const [inputTodo, SetinputTodo] = useState(
        {
            id: id,
            title: "",
            body: "",
            isDone: false
        },
    )

    const onChangeHandler = (event) => {
        const { value, name } = event.target
        console.log(name, value)
        SetinputTodo({ ...inputTodo, [name]: value })
    }

    const onSubmitHandler = (event) => {
        console.log("눌렸다")
        dispatch(add_todo({ ...inputTodo, id: id++ }))
        event.preventDefault()
        SetinputTodo({ ...inputTodo, title: '', body: '' })
    }

    return (
        <div>
            <StHead>
                <StText>나는 연습용 투두리스트다.</StText>
            </StHead>
            <form onSubmit={onSubmitHandler}>
                <label>제목</label>
                <input
                    type="text"
                    name="title"
                    value={inputTodo.title}
                    onChange={onChangeHandler} />
                <label>내용</label>
                <input
                    type="text"
                    name="body"
                    onChange={onChangeHandler} />
                <button type="submit">등록하기</button>
            </form>
        </div>
    )
}

export default Head;

const StHead = styled.div`
    border: 1px #eee solid;
    height: 50px;
    width: 70%;
    display: block;
    margin: auto;
`

const StText = styled.p`
    padding-left: 50px;
`