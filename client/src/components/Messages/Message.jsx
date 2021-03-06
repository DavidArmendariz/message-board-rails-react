import React, { useContext, useEffect, useMemo, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import MessageApi from '../../api/message';
import messageStyles from './Message.module.scss';
import { langTerms } from '../../constants/text';
import { MessagesContext } from '../../contexts';
import Form from 'react-bootstrap/Form';
import CustomButton from '../CustomButton/CustomButton';
import CustomTooltip from '../CustomTooltip/CustomTooltip';

const Message = (props) => {
  const { message } = props;
  const { id, title, body, created_at } = message;
  const { messages, setMessages } = useContext(MessagesContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [renderedTitle, setRenderedTitle] = useState(title);
  const [renderedBody, setRenderedBody] = useState(body);

  useEffect(() => {
    setRenderedTitle(title);
    setRenderedBody(body);
  }, [title, body]);

  const { mutate: deleteMutation } = useMutation((messageId) => MessageApi.deleteMessage(messageId), {
    onSuccess: () => {
      const updatedMessages = messages.filter((message) => message.id !== id);
      setMessages(updatedMessages);
    },
    onError: () => {
      toast.error(langTerms.errorUnexpected);
    },
  });

  const { mutate: editMutation } = useMutation(({ messageId, ...data }) => MessageApi.updateMessage(messageId, data), {
    onSuccess: () => {
      setOpenEdit(false);
      toast.success(langTerms.successfulMesageEdited);
    },
    onError: () => {
      toast.error(langTerms.errorUnexpected);
    },
  });

  const onDeleteMessage = () => {
    deleteMutation(id);
  };

  const onUpdateMessage = () => {
    if (renderedTitle !== title || renderedBody !== body) {
      editMutation({ messageId: id, title: renderedTitle, body: renderedBody });
    }
  };

  const onFocus = () => {
    setOpenEdit(true);
  };

  const onCancelEdit = () => {
    setRenderedTitle(title);
    setRenderedBody(body);
    setOpenEdit(false);
  };

  const onChangeTitle = (event) => {
    setRenderedTitle(event.target.value);
  };

  const onBodyTitle = (event) => {
    setRenderedBody(event.target.value);
  };

  const onKeyPress = (event) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        event.target.blur();
        onUpdateMessage();
        break;
      default:
        break;
    }
  };

  const createdAt = useMemo(() => new Date(created_at).toLocaleString(), [created_at]);

  return (
    <Card className={messageStyles.card}>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Control
              className={messageStyles.inputTitle}
              plaintext
              value={renderedTitle}
              onFocus={onFocus}
              onChange={onChangeTitle}
              onKeyPress={onKeyPress}
            />
            <Card.Text className={messageStyles.createdAt}>{`Created At: ${createdAt}`}</Card.Text>
            <Form.Control
              className={messageStyles.inputBody}
              as="textarea"
              plaintext
              value={renderedBody}
              onFocus={onFocus}
              onChange={onBodyTitle}
              onKeyPress={onKeyPress}
            />
          </Form.Group>
        </Form>
        {openEdit && (
          <div className={messageStyles.editActions}>
            <CustomButton onClick={onUpdateMessage} text={langTerms.save} />
            <CustomButton onClick={onCancelEdit} text={langTerms.cancel} variant="danger" />
          </div>
        )}
      </Card.Body>
      <CustomTooltip text={langTerms.delete}>
        <div className={messageStyles.actions}>
          <AiFillDelete onClick={onDeleteMessage} className={messageStyles.icon} />
        </div>
      </CustomTooltip>
    </Card>
  );
};

export default Message;
