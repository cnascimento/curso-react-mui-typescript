import { FormHandles } from '@unform/core';
import { useCallback, useRef } from 'react';

export const useVForm = () => {
  const formRef = useRef<FormHandles>(null);

  const isSavingAndCLose = useRef(false);
  const isSavingAndNew = useRef(false);

  const handleSave = useCallback(() => {
    isSavingAndCLose.current = false;
    isSavingAndNew.current = false;
    formRef.current?.submitForm();
  }, []);

  const handleSaveAndNew = useCallback(() => {
    isSavingAndCLose.current = false;
    isSavingAndNew.current = true;
    formRef.current?.submitForm();
  }, []);

  const handleSaveAndClose = useCallback(() => {
    isSavingAndCLose.current = true;
    isSavingAndNew.current = false;
    formRef.current?.submitForm();
  }, []);

  const handleIsSaveAndNew = useCallback(() => {
    return isSavingAndNew.current;
  }, []);

  const handleIsSaveAndClose = useCallback(() => {
    return isSavingAndCLose.current;
  }, []);

  return {
    formRef,

    save: handleSave,
    saveAndNew: handleSaveAndNew,
    saveAndClose: handleSaveAndClose,

    isSaveAndNew: handleIsSaveAndNew,
    isSaveAndClose: handleIsSaveAndClose,
  };
};