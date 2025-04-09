import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open }) {
  const dialog = useRef();//the first time this value is undefined as the jsx code is not set yet

  //thats why we need to put the dialog.current.showModal() and dialog.current.close() in the useEffect

  const xxx = useEffect(()=>{
    if(open){
      dialog.current.showModal();
    }
    else{
      dialog.current.close()
    }
  }, [open])

  console.log(xxx)

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
