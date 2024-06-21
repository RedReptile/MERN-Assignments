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
    // Find the elements
    const toggleButton = document.querySelector('.navigation-toggle');
    const navigationList = document.querySelector('.navigation-list');

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
        navigationList.classList.toggle('active'); // Toggle the 'active' class
    });
});

