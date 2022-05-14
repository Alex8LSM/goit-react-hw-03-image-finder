import React from 'react';
import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  return (
    <Circles
      className={s.Loader}
      color="green"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}

export default Loader;
