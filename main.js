document.body.onclick = (e) => {
    const fw = document.createElement('div');
    fw.className = 'firework';
    fw.style.left = e.clientX + 'px';
    fw.style.top = e.clientY + 'px';
    document.body.appendChild(fw);

    const colors = ['red','green','blue','pink','white','yellow'];

    for(let i=0; i<80; i++){
        const p = document.createElement('div');
        p.className = 'particle';
        const angle = Math.random() * Math.PI * 2;
        const vel = 100 + Math.random() * 300;
        p.style.setProperty('--x', Math.cos(angle) * vel + 'px');
        p.style.setProperty('--y', Math.sin(angle) * vel + 'px');
        p.style.background = colors[Math.random() * colors.length|0];
        fw.appendChild(p);
    }

    setTimeout(()=>fw.remove(), 1600);
}