import React from 'react'
import {render} from 'react-dom'
import Layout from "./components/Layout";
import Input from "./components/Input";

render(Layout(), document.getElementById("messages-container"));
render(Input(), document.getElementById('message-input'));
