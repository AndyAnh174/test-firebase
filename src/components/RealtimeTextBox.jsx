// src/components/RealtimeTextBox.js
import React, { useState } from 'react';
import { database, ref, push } from '../firebaseConfig';

const RealtimeTextBox = () => {
  const [text, setText] = useState('');

  // Hàm xử lý khi nhập nội dung vào textbox
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Hàm xử lý khi nhấn nút gửi
  const handleSubmit = () => {
    if (text.trim() === '') {
      alert("Vui lòng nhập nội dung");
      return;
    }

    // Thêm tin nhắn mới vào Firebase với khóa tự động
    const messagesRef = ref(database, 'messages');
    push(messagesRef, {
      text: text,
      timestamp: Date.now(),
    });

    // Xóa nội dung textbox sau khi gửi
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập nội dung..."
      />
      <button onClick={handleSubmit}>Gửi</button>
    </div>
  );
};

export default RealtimeTextBox;
