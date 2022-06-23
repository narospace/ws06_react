import React from 'react';

const Student = ({name, dispatch, id, isHere}) => {
  return (
    <div className='form-inline'>

      <span style={{
        textDecorationLine:isHere?'line-through':'none', cursor:'pointer',
        color:isHere?'gray':'black', display:'inline-block', width:'120px'
      }}
      onClick={()=>{
        dispatch({type:'mark-student', payload:{id}})
      }}>{name}</span>

      <button type='button' className='btn btn-danger btn-xs'
      style={{marginLeft:'10px'}}
      onClick={()=>{
        dispatch({type:'delete-student', payload:{id}})
      }}>삭제</button>   

    </div>
  );
};

export default Student;