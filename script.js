const tractors=[
  {name:'Mahindra 575 DI',hp:'45 HP',gear:'8+2 Gear',price:'₹6.65 Lakh'},
  {name:'Swaraj 744 FE',hp:'48 HP',gear:'8+2 Gear',price:'₹7.10 Lakh'},
  {name:'John Deere 5310',hp:'55 HP',gear:'9+3 Gear',price:'₹9.15 Lakh'},
  {name:'Farmtrac 6055',hp:'50 HP',gear:'8+2 Gear',price:'₹8.25 Lakh'}
];
const grid=document.querySelector('#tractorGrid');
if(grid){grid.innerHTML=tractors.map(t=>`<article class="tractor-card"><div class="tractor-img">🚜</div><div class="tractor-card-body"><h3>${t.name}</h3><div class="specs"><span>${t.hp}</span><span>${t.gear}</span></div><div class="price">${t.price} <small>onwards</small></div></div></article>`).join('')}
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{nav.classList.toggle('mobile-open')})}
