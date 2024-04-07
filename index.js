
const setupSearch = () => {
    const searchInput = document.getElementById('search');
    const contElements = document.querySelectorAll('.cont');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        contElements.forEach(function(contElement) {
            const name = contElement.querySelector('#name').textContent.toLowerCase();
            const id = contElement.querySelector('#id').textContent.toLowerCase();
            const grade = contElement.querySelector('#grade').textContent.toLowerCase();

            if (name.includes(searchTerm) || id.includes(searchTerm) || grade.includes(searchTerm)) {
                contElement.style.display = 'flex';
            } else {
                contElement.style.display = 'none';
            }
        });
    });
};



