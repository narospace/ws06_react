import React from 'react';
import '../App.css';

export default function MemoRowItem({idx, row}) {

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{row.nickname}</td>
      <td>{row.message}</td>
      <td>{row.writeday}</td>
    </tr>
  );
}