const toggleBtn = document.getElementById('toggle-button');
const moreServices = document.getElementById('more-services');

toggleBtn.addEventListener('click', () => {
  if (moreServices.style.display === 'none' || moreServices.style.display === '') {
    moreServices.style.display = 'block';
    toggleBtn.textContent = 'Show Less';
  } else {
    moreServices.style.display = 'none';
    toggleBtn.textContent = 'Show More';
  }
});
