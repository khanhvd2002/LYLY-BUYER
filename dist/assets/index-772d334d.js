import{r as e,M as t}from"./VAvatar-d7bb5f07.js";function r(n){return e({url:"/login",headers:{"Content-Type":"application/json"},method:t.POST,data:n})}function u(){return e({url:"/user/current",headers:{"Content-Type":"application/json"},method:t.GET,needToken:!0})}function a(){return e({url:"/logout",method:t.POST,needToken:!0})}function d(n){return e({url:"/upload",headers:{"Content-Type":"multipart/form-data"},method:t.POST,needToken:!0,data:n})}export{r as a,u as g,a as l,d as u};
