import { useState } from "react";

const Event2 = () => {
    // State 초기화
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': '+message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자 명"
                value={username}
                onChange={onChange}
                ></input>
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력하세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
                ></input>
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default Event2;