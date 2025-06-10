document.querySelectorAll('.sapo').forEach(sapo =>{
    sapo.addEventListener('dragstart',dragStart);
    sapo.addEventListener('dragend',dragEnd);
})

function dragStart(e){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}

document.querySelectorAll('.folha').forEach(folha=>{
    folha.addEventListener('dragover',dragOver)
    folha.addEventListener('dragleave',dragLeave);
    folha.addEventListener('drop',drop);
})

function dragOver(e){
    if(e.currentTarget.querySelector('.sapo')===null){
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
}

function dragLeave (e){
    e.currentTarget.classList.remove('hover');
}

function drop (e){
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.sapo.dragging');
    if(e.currentTarget.querySelector('.sapo')===null){
        e.currentTarget.appendChild(dragItem);
    }

    const folha = document.querySelectorAll('.folha');
    let saposNasFolhas = 0;

folha.forEach(folha => {
    if (folha.querySelector('.sapo')) {
        saposNasFolhas++;
    }
});

if (saposNasFolhas === 3) {
    setTimeout(() => {
        alert("🐸PARABÉNS, VOCÊ SALVOU OS SAPOS 🐸");
    }, 300); 
}
    
}

