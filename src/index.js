import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { NetflixIndex } from './Netflix-Index';
import { Login } from './Components/login/login';
import { DataBinding_01 } from './Components/01_Data-Binding/01_data-binding_number';
import { DataBinding_02 } from './Components/01_Data-Binding/02_data-binding_string';
import { DataBinding_03 } from './Components/01_Data-Binding/03_data-binding_boolean';
import { DataBinding_04 } from './Components/01_Data-Binding/04_data-binding_undefined';
import { DataBinding_05 } from './Components/01_Data-Binding/05_data-binding_null';
import { DataBinding_06 } from './Components/01_Data-Binding/06_data-binding_Array';
import { DataBinding_07 } from './Components/01_Data-Binding/07_data-binding_Array_filter';
import { DataBinding_08 } from './Components/01_Data-Binding/08_data-binding_Array_toolbar';
import { DataBinding_09 } from './Components/01_Data-Binding/09_data-binding_object';
import { DataBinding_10 } from './Components/01_Data-Binding/10_data-binding_Array_of_object';
import { DataBinding_11 } from './Components/01_Data-Binding/11_data-binding_state';
import { DataBinding_12 } from './Components/01_Data-Binding/12_data-bindin-technics';
import { DataBinding_13 } from './Components/01_Data-Binding/13_data-binding_useState';
import { DataBinding_14 } from './Components/01_Data-Binding/14_data-binding_useState';
import { ApiDataBinding_01 } from './Components/02_Api-Data-Binding/01_Api_data_Binding';
import { ApiDataBinding_02 } from './Components/02_Api-Data-Binding/02_Api_data_Binding';
import { ApiDataBinding_03 } from './Components/02_Api-Data-Binding/03_Fetch-method';
import { ApiDataBinding_04 } from './Components/02_Api-Data-Binding/04_jQuery-ajax-method';
import { ApiDataBinding_05 } from './Components/02_Api-Data-Binding/05_Axios-library';
import { StyleBinding_01 } from './Components/03_Style-Binding/01_Style-Binding';
import { ClassBinding_01 } from './Components/04_Class-Binding/01_Class-Binding';
import { ClassBinding_02 } from './Components/04_Class-Binding/02_Class-Binding';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassBinding_02/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
