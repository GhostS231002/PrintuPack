
async function loadGallery(jsonPath, containerSelector){
  try{
    const res = await fetch(jsonPath);
    const data = await res.json();
    const cont = document.querySelector(containerSelector);
    cont.innerHTML = '';
    data.items.forEach(item=>{
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.src}" alt="${item.caption||''}" style="width:100%; border-radius:12px; border:1px solid #e9eefc"/>
        <div style="margin-top:10px">
          <strong>${item.title||''}</strong>
          <p class="muted" style="margin:6px 0 0">${item.caption||''}</p>
        </div>`;
      cont.appendChild(card);
    });
  }catch(err){
    console.error('Gallery error', err);
  }
}
