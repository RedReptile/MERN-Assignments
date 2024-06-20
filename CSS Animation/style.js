document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', function() {
        if (!item.classList.contains('active')) {
          closeAllItems();
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  
    function closeAllItems() {
      accordionItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
  

  /* ----------- Question 10 --------- */

  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navigation-toggle');
    const navList = document.querySelector('.navigation-list');

    toggleButton.addEventListener('click', function() {
        navList.classList.toggle('slide-in');
        navList.classList.toggle('slide-out');
    });
});

