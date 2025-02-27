// Add smooth dropdown animation
document.querySelectorAll('nav ul li').forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'block';
      submenu.style.opacity = '0';
      setTimeout(() => {
        submenu.style.opacity = '1';
      }, 10);
    }
  });

  item.addEventListener('mouseleave', () => {
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.opacity = '0';
      setTimeout(() => {
        submenu.style.display = 'none';
      }, 300);
    }
  });
});
