'use client';
import ReactModal from "react-modal"

interface SucessModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function SucessModal({ isOpen, setIsOpen }: SucessModalProps) {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      overlayClassName='modal-overlay'
      className='modal-body'
    >
      <div className="w-full max-w-md transform overflow-hidden rounded-lg bg-white flex flex-col gap-6 p-6 align-middle shadow-xl transition-all">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Relatório Criado
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="w-[50%] bg-emerald-600 rounded-md mx-auto border-0 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
        >
          OK
        </button>
      </div>
    </ReactModal>
  );
}