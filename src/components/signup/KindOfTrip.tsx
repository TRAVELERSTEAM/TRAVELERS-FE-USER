import React from 'react';

function KindOfTrip({ register, item, index, name }: any) {
  return (
    <div key={index}>
      <input {...register(name)} value={item} type="checkbox" name={name} />
      <label>{item}</label>
    </div>
  );
}

export default KindOfTrip;
