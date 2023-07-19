import{s as i,u as O,j as e}from"./index-650d6046.js";import{u as P}from"./store-835fd0e7.js";const S=i.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 0.8) 100%
  );
`,F=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`,L=i.h1`
  color: rgba(255, 255, 255, 0.87);

  margin-top: 48px;
  text-align: center;
  font-family: "Montserrat-Semibold";
  font-size: 48px;
`,W=i.p`
  color: rgba(255, 255, 255, 0.87);
  margin: 12px 0 48px 0;
  text-align: center;
  font-size: 24px;
`,s=i.span`
  width: 80%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.87);
`,_=i.p`
  margin: 48px 0;
  padding: 0 64px;
  text-align: center;
  font-size: 24px;
`,D=i.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 48px 0;
`,c=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`,t=i.p`
  font-family: "Montserrat-Semibold";
  font-size: 24px;
  text-transform: uppercase;
`,d=i.p`
  font-size: 48px;
  text-align: end;
  color: rgba(255, 255, 255, 0.87);
`,U=i.div`
  display: flex;
  align-items: center;
  min-width: 30%;
  padding: 0 100px;
`,V=i.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
`,H=i.ul`
  font-size: 32px;
  line-height: 1.2;
`,Y=i.img`
  width: 200px;
`,k=i.p`
  margin: 48px 0;
  padding: 0 64px;
  font-size: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
`;i.div`
  display: flex;
  padding: 64px 0;
`;const x=i.h3`
  margin-bottom: 48px;
  font-family: "Montserrat-Semibold";
  font-size: 36px;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  text-transform: uppercase;
`,o=i.p`
  margin-bottom: 48px;
  font-size: 36px;
  text-align: start;
  color: rgba(255, 255, 255, 0.87);
`,A=i.div`
  display: flex;
  flex-direction: column;
`,G=i.div`
  display: flex;
  flex-direction: column;
`;function J(){const{beerId:g}=O(),h=P(n=>n.recipes).find(n=>n.id===+g),{name:f,tagline:j,description:u,image_url:b,abv:y,brewers_tips:v,first_brewed:w,food_pairing:T,volume:p,ingredients:B,method:z}=h,{hops:I,malt:C,yeast:E}=B,{fermentation:{temp:m},mash_temp:l}=z;return e.jsx(S,{children:e.jsxs(F,{children:[e.jsx(L,{children:f}),e.jsx(W,{children:j}),e.jsx(s,{}),e.jsx(_,{children:u}),e.jsx(s,{}),e.jsxs(D,{children:[e.jsxs(c,{children:[e.jsx(t,{children:"ALCOHOL BY VOLUME"}),e.jsxs(d,{style:{marginBottom:48},children:[y,"%"]}),e.jsx(t,{children:"FIRST BREWED"}),e.jsx(d,{style:{marginBottom:48},children:w}),e.jsx(t,{children:"PRODUCTION VOLUME"}),e.jsxs(d,{style:{marginBottom:48},children:[p.value," ",p.unit]})]}),e.jsxs(V,{children:[e.jsx(t,{style:{color:"rgba(255, 255, 255, 0.87)",fontSize:36},children:"GOES PERFECTLY WITH:"}),e.jsx("br",{}),e.jsx(H,{children:T.map(n=>e.jsxs("li",{children:["- ",n,e.jsx("br",{}),e.jsx("br",{})]},n))})]}),e.jsx(U,{children:e.jsx(Y,{src:b})})]}),e.jsx(s,{}),e.jsx(x,{style:{marginTop:48,marginBottom:0},children:"Brewers tips:"}),e.jsx(k,{children:v}),e.jsx(s,{}),e.jsxs(c,{style:{marginTop:48},children:[e.jsx(x,{children:"Ingredients:"}),e.jsx(t,{children:"Hops"}),e.jsx(o,{children:I.map(({add:n,amount:r,attribute:a,name:M},R)=>e.jsxs("li",{children:["- for ",n.toUpperCase(),": ",r.value," ",r.unit," of ",M," (for ",a,")",e.jsx("br",{})]},R))}),e.jsx(t,{children:"Malt"}),e.jsx(o,{children:C.map(({name:n,amount:r},a)=>e.jsxs("li",{children:["- ",r.value," ",r.unit," of  ",n,e.jsx("br",{})]},a))}),e.jsx(t,{children:"Yeast"}),e.jsx(o,{children:E})]}),e.jsx(s,{style:{marginBottom:48}}),e.jsx(x,{children:"Production method:"}),e.jsxs(c,{style:{flexDirection:"row",width:"100%",justifyContent:"space-between"},children:[e.jsxs(A,{children:[e.jsx(t,{children:"Fermentation temperature"}),e.jsxs(o,{children:[m.value," ",m.unit]})]}),e.jsxs(G,{children:[e.jsx(t,{children:"Mashing temperature"}),e.jsxs(o,{children:[l[0].temp.value," ",l[0].temp.unit," for"," ",l[0].duration," minutes"]})]})]})]})})}export{J as default};
