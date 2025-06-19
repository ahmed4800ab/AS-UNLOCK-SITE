// === معرض الصور مع نافذة عرض متطورة (يدعم <a> داخل .gallery) ===

const createGalleryModal = (links, currentIdx) => {
  document.querySelectorAll('.gallery-modal').forEach(m => m.remove());

  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  Object.assign(modal.style, {
    position: 'fixed',
    top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center',
    zIndex: 10000,
    overflow: 'auto',
    padding: '20px',
    boxSizing: 'border-box'
  });

  // زر إغلاق
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '16px', right: '16px',
    fontSize: '2.5rem', color: '#fff',
    background: 'none', border: 'none', cursor: 'pointer',
    zIndex: 10001,
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.3s'
  });
  closeBtn.onmouseover = () => closeBtn.style.backgroundColor = 'rgba(255,255,255,0.1)';
  closeBtn.onmouseout = () => closeBtn.style.backgroundColor = 'transparent';
  closeBtn.title = 'إغلاق';
  closeBtn.onclick = () => modal.remove();
  modal.appendChild(closeBtn);

  // زر يسار
  const leftBtn = document.createElement('button');
  leftBtn.innerHTML = '&#8592;';
  Object.assign(leftBtn.style, {
    position: 'absolute',
    top: '50%', left: '16px',
    transform: 'translateY(-50%)',
    fontSize: '2rem', color: '#fff',
    background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%',
    width: '40px', height: '40px', cursor: 'pointer',
    zIndex: 10001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s'
  });
  leftBtn.onmouseover = () => leftBtn.style.backgroundColor = 'rgba(0,0,0,0.7)';
  leftBtn.onmouseout = () => leftBtn.style.backgroundColor = 'rgba(0,0,0,0.5)';
  leftBtn.title = 'السابق';
  leftBtn.onclick = e => { e.stopPropagation(); showImg(currentIdx - 1); };
  modal.appendChild(leftBtn);

  // زر يمين
  const rightBtn = document.createElement('button');
  rightBtn.innerHTML = '&#8594;';
  Object.assign(rightBtn.style, {
    position: 'absolute',
    top: '50%', right: '16px',
    transform: 'translateY(-50%)',
    fontSize: '2rem', color: '#fff',
    background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%',
    width: '40px', height: '40px', cursor: 'pointer',
    zIndex: 10001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s'
  });
  rightBtn.onmouseover = () => rightBtn.style.backgroundColor = 'rgba(0,0,0,0.7)';
  rightBtn.onmouseout = () => rightBtn.style.backgroundColor = 'rgba(0,0,0,0.5)';
  rightBtn.title = 'التالي';
  rightBtn.onclick = e => { e.stopPropagation(); showImg(currentIdx + 1); };
  modal.appendChild(rightBtn);

  // زر واتساب للمشاركة
  const whatsappBtn = document.createElement('a');
  whatsappBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>';
  Object.assign(whatsappBtn.style, {
    position: 'absolute',
    bottom: '16px', right: '16px',
    background: '#25D366',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    zIndex: 10001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s',
    textDecoration: 'none'
  });
  whatsappBtn.onmouseover = () => whatsappBtn.style.transform = 'scale(1.1)';
  whatsappBtn.onmouseout = () => whatsappBtn.style.transform = 'scale(1)';
  whatsappBtn.title = 'مشاركة عبر واتساب';
  whatsappBtn.onclick = e => {
    e.stopPropagation();
    const imgUrl = links[currentIdx].getAttribute('href');
    const text = 'شاهد هذه الصورة من موقع A.S UNLOCK';
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + imgUrl)}`;
    window.open(whatsappUrl, '_blank');
  };
  modal.appendChild(whatsappBtn);

  // عنوان أو رقم الصورة
  const caption = document.createElement('div');
  caption.className = 'gallery-modal-caption';
  Object.assign(caption.style, {
    color: '#fff',
    fontSize: '1rem',
    margin: '16px 0 0 0',
    textAlign: 'center',
    fontFamily: 'inherit',
    padding: '8px 16px',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: '20px',
    position: 'absolute',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10001
  });
  modal.appendChild(caption);

  // عرض الصورة
  const imgBox = document.createElement('div');
  Object.assign(imgBox.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    padding: '20px'
  });
  modal.appendChild(imgBox);

  function showImg(idx) {
    if (idx < 0) idx = links.length - 1;
    if (idx >= links.length) idx = 0;
    currentIdx = idx;
    imgBox.innerHTML = '';
    const modalImg = document.createElement('img');
    modalImg.src = links[idx].getAttribute('href');
    Object.assign(modalImg.style, {
      maxWidth: '100%',
      maxHeight: '80vh',
      objectFit: 'contain',
      borderRadius: '12px',
      boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
      transition: 'transform 0.3s'
    });
    imgBox.appendChild(modalImg);
    caption.textContent = `الصورة ${idx + 1} من ${links.length}`;
  }

  showImg(currentIdx);
  document.body.appendChild(modal);

  // إغلاق عند الضغط على الخلفية فقط (ليس الصورة)
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.remove();
  });

  // تنقل بالأسهم
  modal.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') showImg(currentIdx - 1);
    if (e.key === 'ArrowRight') showImg(currentIdx + 1);
    if (e.key === 'Escape') modal.remove();
  });

  // تنقل بالسوايب على الأجهزة اللمسية
  let touchStartX = 0;
  let touchEndX = 0;
  
  modal.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  modal.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // سوايب يسار
      showImg(currentIdx + 1);
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      // سوايب يمين
      showImg(currentIdx - 1);
    }
  }

  modal.tabIndex = 0;
  modal.focus();
};

// تطبيق فتح الصور في المعرض على كل الروابط
const setupGalleryImages = () => {
  const links = Array.from(document.querySelectorAll('.gallery a'));
  links.forEach((a, idx) => {
    a.style.cursor = 'zoom-in';
    a.onclick = e => {
      e.preventDefault();
      createGalleryModal(links, idx);
    };
  });
};

window.addEventListener('DOMContentLoaded', setupGalleryImages);
const observer = new MutationObserver(setupGalleryImages);
observer.observe(document.body, { childList: true, subtree: true }); 