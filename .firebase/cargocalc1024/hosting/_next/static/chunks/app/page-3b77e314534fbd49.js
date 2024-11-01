(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7182:function(e,t,l){Promise.resolve().then(l.bind(l,4911))},4911:function(e,t,l){"use strict";var a=l(7437),s=l(2265);t.default=()=>{let[e,t]=(0,s.useState)({length:"",width:"",height:"",pieces:"1",weight:""}),[l,o]=(0,s.useState)({length:"m",width:"m",height:"m",weight:"kg"}),[r,n]=(0,s.useState)({totalArea:null,totalVolume:null,totalWeight:null}),i=(e,t)=>{let l=parseFloat(e);if(isNaN(l))return 0;switch(t){case"mm":return l/1e3;case"cm":return l/100;default:return l}},d=(e,t)=>{let l=parseFloat(e);if(isNaN(l))return 0;switch(t){case"g":return l/1e3;case"kg":default:return l;case"t":return 1e3*l}},c=e=>{let{name:l,value:a}=e.target;t(e=>({...e,[l]:a}))},u=(e,t)=>{o(l=>({...l,[e]:t}))},m=function(t,s){let o=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=arguments.length>3?arguments[3]:void 0;return(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:s,className:"block text-sm font-medium text-gray-700",children:[t," ",o&&(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{type:"number",id:s,name:s,value:e[s],onChange:c,placeholder:"Enter ".concat(t.toLowerCase()),className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#042d62] focus:border-[#042d62]"}),"pieces"!==s&&r&&(0,a.jsx)("select",{value:l[s],onChange:e=>u(s,e.target.value),className:"px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#042d62] focus:border-[#042d62]",children:r.map(e=>(0,a.jsx)("option",{value:e,children:e},e))})]})]})};return(0,a.jsx)("div",{className:"w-full max-w-md mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden",children:(0,a.jsxs)("div",{className:"px-4 py-5 sm:p-6",children:[(0,a.jsx)("div",{className:"flex justify-center mb-4",children:(0,a.jsx)("img",{src:"/LoadSure.png",alt:"LoadSure Logo",className:"h-[60px] w-[150px] object-contain"})}),(0,a.jsx)("h2",{className:"text-2xl font-bold text-center text-[#042d62] mb-6",children:"Cargo Area & Volume Calculator"}),(0,a.jsxs)("div",{className:"space-y-6",children:[m("Length","length",!0,["mm","cm","m"]),m("Width","width",!0,["mm","cm","m"]),m("Height","height",!1,["mm","cm","m"]),m("Weight per Item","weight",!1,["g","kg","t"]),m("Number of Pieces","pieces")]}),(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsx)("button",{onClick:()=>{let t=i(e.length,l.length),a=i(e.width,l.width),s=i(e.height,l.height),o=parseInt(e.pieces,10)||1,r=d(e.weight,l.weight);if(t>0&&a>0){let e=t*a*o;s>0?n({totalArea:e.toFixed(2),totalVolume:(t*a*s*o).toFixed(2),totalWeight:(r*o).toFixed(0)}):n({totalArea:e.toFixed(2),totalVolume:null,totalWeight:r>0?(r*o).toFixed(0):null})}else alert("Please enter valid positive numbers for at least length and width.")},className:"w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#042d62] hover:bg-[#031d3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#042d62]",children:"Calculate"})}),(null!==r.totalArea||null!==r.totalVolume||null!==r.totalWeight)&&(0,a.jsxs)("div",{className:"mt-6 text-center bg-gray-100 p-4 rounded-md space-y-2",children:[null!==r.totalArea&&(0,a.jsxs)("p",{className:"text-lg font-semibold text-gray-900",children:["Total area: ",r.totalArea," m\xb2"]}),null!==r.totalVolume&&(0,a.jsxs)("p",{className:"text-lg font-semibold text-gray-900",children:["Total volume: ",r.totalVolume," m\xb3"]}),null!==r.totalWeight&&(0,a.jsxs)("p",{className:"text-lg font-semibold text-gray-900",children:["Total weight: ",r.totalWeight," kg"]})]})]})})}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=7182)}),_N_E=e.O()}]);