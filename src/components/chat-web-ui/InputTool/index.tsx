import React from 'react';

import Footer from './Footer';
import Input from './Input';
import SubmitButton from './SubmitButton';
import SubmitIcon from '../other/icons/SubmitIcon';

interface IInputTool {
  isSubmit: boolean;
}

const InputTool: React.FC<IInputTool> = (props) => {
  const {isSubmit} = props;
  return (
    <Footer className="rsc-footer">
      <Input
        type="textarea"
        className="rsc-input"
        placeholder={'请输入消息'}
      />
      <SubmitButton
        className="rsc-submit-button"
        disabled={isSubmit}
        onClick={()=>{
          console.log('发送');
        }}
      >
        <SubmitIcon/>
      </SubmitButton>
    </Footer>
  )
}

export default InputTool;
