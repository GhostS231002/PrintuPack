
async function loadHotspots(imgSelector, jsonPath){
  const img = document.querySelector(imgSelector);
  if(!img) return;
  const wrap = img.parentElement;
  wrap.style.position = 'relative';
  const res = await fetch(jsonPath);
  const data = await res.json();
  data.points.forEach(p=>{
    const dot = document.createElement('a');
    dot.href = p.href || '#';
    dot.className = 'dot';
    dot.title = p.label || '';
    Object.assign(dot.style, {
      position:'absolute', left: p.x + '%', top: p.y + '%',
      width:'16px', height:'16px', borderRadius:'50%', background:'var(--accent)',
      border:'2px solid #fff', boxShadow:'0 6px 16px rgba(30,136,229,.5)',
      transform: 'translate(-50%, -50%)'
    });
    wrap.appendChild(dot);
  });
}
