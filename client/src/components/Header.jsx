import React from 'react';
import headerStyles from './Header.module.scss';
import CustomButton from './CustomButton';
import { RiAddFill } from 'react-icons/ri';

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
            text="New message"
            Icon={<RiAddFill className={headerStyles.newMessageButton} />}
          />
        </div>
        <div>Message Board</div>
      </div>
      <div className={headerStyles.divider} />
    </>
  );
};

export default Header;
