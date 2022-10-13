import React from 'react';
import styled from 'styled-components';

function KindOfTrip({ register, item, index, name }: any) {
  return (
    <GroupItem key={index}>
      <div className="check-button">
        <input {...register(name)} value={item} type="checkbox" name={name} />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0026 3.33301C10.8026 3.33301 3.33594 10.7997 3.33594 19.9997C3.33594 29.1997 10.8026 36.6663 20.0026 36.6663C29.2026 36.6663 36.6693 29.1997 36.6693 19.9997C36.6693 10.7997 29.2026 3.33301 20.0026 3.33301ZM20.0026 33.333C12.6526 33.333 6.66927 27.3497 6.66927 19.9997C6.66927 12.6497 12.6526 6.66634 20.0026 6.66634C27.3526 6.66634 33.3359 12.6497 33.3359 19.9997C33.3359 27.3497 27.3526 33.333 20.0026 33.333ZM27.6526 12.633L16.6693 23.6163L12.3526 19.3163L10.0026 21.6663L16.6693 28.333L30.0026 14.9997L27.6526 12.633Z"
            fill="#757575"
          />
        </svg>
      </div>
      <label>{item}</label>
    </GroupItem>
  );
}

export default KindOfTrip;

const GroupItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  position: relative;
  .check-button {
    width: 40px;
    height: 40px;
    position: relative;
    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      margin: 0;
      &:checked ~ svg {
        path {
          fill: #0080c6;
        }
      }
    }
  }
`;
