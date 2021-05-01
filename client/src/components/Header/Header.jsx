import React from 'react';
import headerStyles from './Header.module.scss';
import CustomButton from '../CustomButton/CustomButton';
import { RiAddFill } from 'react-icons/ri';
import { langTerms } from '../../constants/text';

const Header = (props) => {
  const { open, setOpen } = props;
  const toggleNewMessage = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={headerStyles.header}>
        <div className={headerStyles.customButton}>
          <CustomButton
            onClick={toggleNewMessage}
            text={langTerms.newMessage}
            Icon={<RiAddFill className={headerStyles.newMessageButton} />}
          />
        </div>
        <div>{langTerms.messageBoard}</div>
      </div>
      <div className={headerStyles.divider} />
    </>
  );
};

export default Header;
