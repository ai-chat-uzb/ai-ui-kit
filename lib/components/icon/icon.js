import o from"react";import e from"classnames";import s from"lodash/get";import*as t from"./list/index.js";import l from"./icon.module.scss.js";const n=({cy:n,name:r,size:c=15,className:a,color:m,onClick:i})=>{const p=s(t,`[${r}]`);return p?o.createElement("span",{className:e(l.wrapper,a),onClick:i,style:{"--size":`${c}px`,color:m},"data-cy":n},o.createElement(p,null)):(console.log("Icon component not found"),null)};export{n as default};