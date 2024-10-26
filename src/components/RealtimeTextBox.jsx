// src/components/RealtimeTextBox.js
import React, { useState } from 'react';
import { database, ref, set } from '../firebaseConfig';

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

    // Gửi nội dung lên Firebase
    set(ref(database, 'textBox'), {
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
