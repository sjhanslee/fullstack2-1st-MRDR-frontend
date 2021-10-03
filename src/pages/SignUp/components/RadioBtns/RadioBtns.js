import React from 'react';
import RadioBtn from '../RadioBtn/RadioBtn';
import './RadioBtns.scss';

class RadioBtns extends React.Component {
  render() {
    const {
      props: { btns, name, tableTypeChanger },
    } = this;

    return (
      <div className="RadioBtns">
        {btns.map(btn => {
          const { id, label, value } = btn;
          return (
            <RadioBtn
              tableTypeChanger={tableTypeChanger}
              key={id}
              name={name}
              label={label}
              id={id}
              value={value}
            />
          );
        })}
      </div>
    );
  }
}

export default RadioBtns;
