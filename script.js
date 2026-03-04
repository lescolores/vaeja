(function(){
  const svg=document.querySelector('svg'),g=document.getElementById('TT'),
        bg=document.getElementById('TT-bg'),tx=document.getElementById('TT-tx'),P=12;
  function mv(e){
    const vb=svg.viewBox.baseVal,rc=svg.getBoundingClientRect();
    const mx=(e.clientX-rc.left)*vb.width/rc.width;
    const my=(e.clientY-rc.top)*vb.height/rc.height;
    const bb=tx.getBBox();
    bg.setAttribute('x',bb.x-P);bg.setAttribute('y',bb.y-P);
    bg.setAttribute('width',bb.width+P*2);bg.setAttribute('height',bb.height+P*2);
    g.setAttribute('transform','translate('+( mx+16)+','+(my-12)+')');
  }
  document.querySelectorAll('[data-tip]').forEach(el=>{
    el.style.cursor='pointer';
    el.addEventListener('mouseenter',e=>{tx.textContent=el.dataset.tip;g.style.display='block';mv(e);});
    el.addEventListener('mousemove',mv);
    el.addEventListener('mouseleave',()=>g.style.display='none');
  });
})();