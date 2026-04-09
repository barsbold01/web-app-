
document.addEventListener('DOMContentLoaded', () => {

  const filterBtn   = document.querySelector('.uni-filter-btn');
  const filterPanel = document.getElementById('filterPanel');
  if (filterBtn && filterPanel) {
    filterBtn.addEventListener('click', () => {
      filterPanel.classList.toggle('active');
    });
  }

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  const modal       = document.getElementById('scholModal');
  const closeBtn    = document.querySelector('.schol-close-modal');
  const saveBtn     = document.querySelector('.schol-save-btn');
  const overlay     = document.querySelector('.schol-modal-overlay');

  document.querySelectorAll('.scholar-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('.apply-btn') || e.target.closest('.heart-btn')) return;

      const logo      = card.querySelector('.scholar-card__logo')?.textContent.trim() || '';
      const name      = card.querySelector('.scholar-card__name')?.textContent.trim() || '';
      const provider  = card.querySelector('.scholar-card__provider')?.textContent.trim() || '';
      const funding   = card.querySelector('.funding-type')?.textContent.trim() || '';
      const deadline  = card.querySelector('.deadline-date')?.textContent.trim() || '';
      const tags      = [...card.querySelectorAll('.uni-tag')].map(t => t.textContent.trim());

      document.getElementById('sm-logo').textContent      = logo;
      document.getElementById('sm-title').textContent     = name;
      document.getElementById('sm-provider').innerHTML    = `<i class="fas fa-university"></i> ${provider}`;
      document.getElementById('sm-funding').textContent   = funding;
      document.getElementById('sm-amount').textContent    = tags[0] || 'Бүтэн тэтгэлэг';
      document.getElementById('sm-deadline').textContent  = deadline;
      document.getElementById('sm-level').textContent     = tags[1] || '—';

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    saveBtn.classList.remove('active');
  }

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  saveBtn?.addEventListener('click', () => {
    saveBtn.classList.toggle('active');
    const icon = saveBtn.querySelector('i');
    if (saveBtn.classList.contains('active')) {
      icon.classList.replace('fa-regular', 'fa-solid');
    } else {
      icon.classList.replace('fa-solid', 'fa-regular');
    }
  });

});