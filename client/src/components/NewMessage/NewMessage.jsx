import React from 'react';
import newMessageStyles from './NewMessage.module.scss';
import CustomForm from '../CustomForm/CustomForm';
import Collapse from 'react-bootstrap/Collapse';
import { useMutation, useQueryClient } from 'react-query';
import MessageApi from '../../api/message';
import CustomSpinner from '../CustomSpinner/CustomSpinner';
import { toast } from 'react-toastify';
import { MESSAGES_QUERY } from '../../constants/queries';
import { langTerms } from '../../constants/text';

const NewMessage = (props) => {
  const { open, setOpen } = props;
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation((data) => MessageApi.createMessage(data), {
    onSuccess: () => {
      setOpen(false);
      toast.success(langTerms.successfulMessageCreated);
      queryClient.invalidateQueries(MESSAGES_QUERY);
    },
    onError: (err) => {
      console.error(err);
      toast.error(langTerms.errorUnexpected);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Collapse in={open}>
      <div className={newMessageStyles.newMessage}>
        {isLoading && (
          <div className={newMessageStyles.center}>
            <CustomSpinner />
          </div>
        )}
        <CustomForm onSubmit={onSubmit} />
      </div>
    </Collapse>
  );
};

export default NewMessage;
