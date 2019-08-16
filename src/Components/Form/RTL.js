import React from 'react'

import { create } from 'jss';
import rtl from 'jss-rtl';
import {createGenerateClassName, StylesProvider, jssPreset } from '@material-ui/styles';
import JssProvider from "react-jss/lib/JssProvider";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

function RTL(props) {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {props.children}
    </JssProvider>
  );
}
export default RTL;