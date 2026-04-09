document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("uniModal");
    const closeBtn = document.querySelector(".close-modal");
    const filterBtn = document.querySelector(".uni-filter-btn");
    const filterPanel = document.getElementById("filterPanel");

    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Click-ийг гадагш алдахгүй байх
            filterPanel.classList.toggle('active');            
        });
    }

    document.querySelectorAll('.uni-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.heart-btn') || e.target.closest('.save-btn')) return;
            
            if (modal) modal.style.display = "block";
        });
    });

    if (closeBtn) {
        closeBtn.onclick = () => { modal.style.display = "none"; };
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        if (filterPanel && !filterPanel.contains(event.target) && event.target !== filterBtn) {
            filterPanel.classList.remove('active');
        }
    });

    document.addEventListener('click', (e) => {
    const saveBtn = e.target.closest('.save-btn');
    
        if (saveBtn) {
            saveBtn.classList.toggle('active');
            
            const icon = saveBtn.querySelector('i');
            const text = saveBtn.querySelector('span');

            if (saveBtn.classList.contains('active')) {
                icon.classList.replace('fa-regular', 'fa-solid'); 
                text.textContent = "ХАДГАЛАГДСАН"; 
            } else {
                icon.classList.replace('fa-solid', 'fa-regular'); 
                text.textContent = "ХАДГАЛАХ";
            }
        }
    });
});