import{n as a}from"./index.4dec3c6a.js";import{calculateFilters as m,parseJSON as p,decodeCollectionMeta as u}from"./util.0ea43082.js";import"./_commonjsHelpers.de833af9.js";import"./index.08ff3111.js";const j=(n,i)=>{const{collection:e,sort:o}=n();g(e,o).then(r=>{const s=m(r);r={...r,filters:s},i(r)}).catch(r=>{console.log(r)})},g=(n,i)=>l(n,i,1).then(e=>{let{pages:o}=e;if(o=Number(o),o>1){const s=[...Array(o-1).keys()].map(t=>l(n,i,t+2));return Promise.all(s).then(t=>(t.forEach(c=>{e.variants=[...e.variants,...c.variants]}),Promise.resolve(e)))}else return Promise.resolve(e)}),l=(n,i,e)=>new Promise((o,r)=>{a.ajax({url:`${n}?view=plp-endpoint&sort_by=${i}&page=${e}`},(s,t)=>{t=p(t),t.meta&&u(t.meta),o(t)})});export{j as getData};