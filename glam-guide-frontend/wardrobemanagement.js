// Reference to the table body
const tableBody = document.querySelector("#outfit-table tbody");

function addOutfit() {
    const nameInput = document.getElementById('outfit-name');
    const colorSelect = document.getElementById('outfit-color');
    const seasonSelect = document.getElementById('outfit-season');
    const materialSelect = document.getElementById('outfit-material');

    const name = nameInput.value.trim();
    const color = colorSelect.value;
    const season = seasonSelect.value;
    const material = materialSelect.value;

    if (!name || !color || !season || !material) {
        alert("Please fill out all fields");
        return;
    }

    // Add new outfit to the selected season category
    wardrobeData[season].push({
        name: name,
        color: color,
        season: season,
        material: material
    });

    // Automatically show the category (default to Winter)
    showCategory(season);

    // Add to the table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${color}</td>
        <td>${season}</td>
        <td>${material}</td>
    `;
    tableBody.appendChild(row);

    // Reset form fields
    nameInput.value = '';
    colorSelect.value = '';
    seasonSelect.value = '';
    materialSelect.value = '';
}
