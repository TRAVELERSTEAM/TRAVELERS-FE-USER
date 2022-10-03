import React from 'react';

function KindOfTrip({ register, item, index, name, onChecked, checkedList }: any) {
  return (
    <div key={index}>
      <input
        {...register(name, {
          required: true,
        })}
        onChange={(e) => {
          onChecked(e.target.checked, e.target.value);
        }}
        value={item}
        type="checkbox"
        name={name}
        checked={checkedList.includes(item) ? true : false}
      />
      <label>{item}</label>
    </div>
  );
}

export default KindOfTrip;
