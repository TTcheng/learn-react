import React from 'react';

const messages = [
    {id: 1, title: "message001", content: "Content 1"},
    {id: 2, title: "message002", content: "Content 2"},
    {id: 3, title: "message003", content: "Content 3"},
];

function MessageDetail(props) {
    const {id} = props.match.params;
    // 这里模拟请求数据
    const message = messages.find((message) => message.id === id * 1);
    return (
        <div>
            <ul>
                <li>ID:{message.id}</li>
                <li>Title:{message.title}</li>
                <li>Content:{message.content}</li>
            </ul>
        </div>
    );
}

export default MessageDetail;