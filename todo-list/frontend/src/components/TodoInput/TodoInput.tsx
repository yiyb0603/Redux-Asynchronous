import { memo } from 'react';
import useTodoInput from 'hooks/useTodoInput';
import { MdClose } from 'react-icons/md';
import { CgSpinnerTwo } from 'react-icons/cg';
import './TodoInput.scss';

const TodoInput = (): JSX.Element => {
  const {
    loading,
    request,
    onChangeRequest,
    onClearRequest,
    requestCreateTodo,
  } = useTodoInput();

  return (
    <div className='TodoInput'>
      <input
        className='TodoInput-Input'
        type='text'
        name='contents'
        value={request.contents}
        onChange={onChangeRequest}
        onKeyDown={requestCreateTodo}
        placeholder='input your Todo'
      />

      {
        !loading ?
        <MdClose
          className='TodoInput-Close'
          onClick={onClearRequest}
        /> : <CgSpinnerTwo />
      }
    </div>
  );
};

export default memo(TodoInput);
