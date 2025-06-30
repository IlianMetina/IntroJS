// Afficher/cacher le formulaire
document.getElementById('afficherForm').onclick = function() {
    const form = document.getElementById('form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
};

// Ajouter une tâche
document.getElementById('ajouter').onclick = function() {
    const titre = document.getElementById('titre').value;
    if (titre === '') return;
    
    const description = document.getElementById('description').value;
    
    // Créer l'élément de la tâche
    const div = document.createElement('div');
    
    const h3 = document.createElement('h3');
    h3.textContent = titre;
    
    const p = document.createElement('p');
    p.textContent = description;
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (this.checked) {
            h3.style.textDecoration = 'line-through';
            p.style.textDecoration = 'line-through';
        } else {
            h3.style.textDecoration = 'none';
            p.style.textDecoration = 'none';
        }
    };
    
    const supprimer = document.createElement('button');
    supprimer.className = 'supprimer';
    supprimer.textContent = 'Supprimer';
    supprimer.onclick = function() {
        div.remove();
    };
    
    actionsDiv.appendChild(checkbox);
    actionsDiv.appendChild(supprimer);
    
    div.appendChild(h3);
    if (description !== '') {
        div.appendChild(p);
    }
    div.appendChild(actionsDiv);
    
    document.getElementById('liste').appendChild(div);
    
    // Vider les champs et cacher le formulaire
    document.getElementById('titre').value = '';
    document.getElementById('description').value = '';
    document.getElementById('form').style.display = 'none';
};