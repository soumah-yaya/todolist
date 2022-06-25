import{d as I,a as m,r as _,b as $,o as B,c as d,e as C,u as s,f as o,w as i,g as D,h as L,i as p,j as u,k as N,l as w,m as A,n as R,t as k,p as S}from"./index.35c9d10c.js";const T={class:"login__wrapper"},V={class:"login__box"},P={key:0},U={key:1},j={key:0,class:"wrongData"},z={key:1,class:"wrongData"},G=I({__name:"LoginView",setup(Z){m.defaults.baseURL=" http://localhost:3500",m.defaults.headers.post["Content-Type"]="application/json";let a=_(!0),n=_(!1),b=_(!0),v=_(!0),h=D();const t=$({username:"",email:"",password:""});B(()=>{window.sessionStorage.getItem("token")&&h.replace({path:"/"})});const E=async g=>{if(a.value){const{status:e}=await m.get(`/user?email=${t.email}&password=${t.password}`);n.value=!1,e===200?(window.sessionStorage.setItem("token","ABCDEFGHIJK"),h.replace({path:"/"})):b.value=!1}else{const{username:e,email:c,password:r}=t,{data:f,status:y}=await m.get(`/user?email=${t.email}&password=${t.password}`);if(console.log(f,y),f.length!==0)v.value=!1,n.value=!1;else{a.value=!0;const{status:x}=await m.post("/user",JSON.stringify({id:L(),username:e,email:c,password:r}));x===201?(window.sessionStorage.setItem("token","ABCDEFGHIJK"),h.replace({path:"/"})):console.log("register fails")}}},F=g=>{n.value=!1,console.log("Failed:",g)};return(g,e)=>{const c=p("a-input"),r=p("a-form-item"),f=p("a-input-password"),y=p("a-button"),x=p("a-form");return u(),d("div",T,[C("div",V,[s(a)?(u(),d("h2",P,"Login")):(u(),d("h2",U,"Register")),o(x,{model:t,name:"normal_login",class:"login-form",onFinish:E,onFinishFailed:F,"label-col":{span:5}},{default:i(()=>[s(a)?w("",!0):(u(),N(r,{key:0,label:"Name",name:"username",rules:[{required:!0,message:"Please input your name!"},{max:15,min:3,message:"username must be 3-15 characters long",trigger:"blur"}]},{default:i(()=>[o(c,{value:t.username,"onUpdate:value":e[0]||(e[0]=l=>t.username=l)},null,8,["value"])]),_:1})),o(r,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"},{pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z0-9]{2,6}$/,message:"Please enter valid email address",trigger:"blur"}]},{default:i(()=>[o(c,{value:t.email,"onUpdate:value":e[1]||(e[1]=l=>t.email=l)},null,8,["value"])]),_:1},8,["rules"]),o(r,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"},{max:15,min:6,message:"username must be 6-15 characters long",trigger:"blur"}]},{default:i(()=>[o(f,{value:t.password,"onUpdate:value":e[2]||(e[2]=l=>t.password=l)},null,8,["value"])]),_:1}),o(r,{class:"btn-section","wrapper-col":{offset:5}},{default:i(()=>[o(y,{onClick:e[3]||(e[3]=l=>A(n)?n.value=!0:n=!0),type:"primary","html-type":"submit",class:"login-form-button",loading:s(n)},{default:i(()=>[R(k(s(a)?"LOGIN":"CREATE AN ACCOUNT"),1)]),_:1},8,["loading"]),R(" "+k(s(a)?"No account yet?":"I already have an account.")+" ",1),C("a",{href:"",onClick:e[4]||(e[4]=S(l=>A(a)?a.value=!s(a):a=!s(a),["prevent"]))},k(s(a)?"Register now!":"Login"),1)]),_:1}),!s(b)||!s(v)?(u(),N(r,{key:1,"wrapper-col":{offset:5}},{default:i(()=>[s(b)?w("",!0):(u(),d("p",j,"The given data are invalid")),s(v)?w("",!0):(u(),d("p",z," This email is already registered "))]),_:1})):w("",!0)]),_:1},8,["model"])])])}}});export{G as default};
