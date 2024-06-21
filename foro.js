document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('new-topic-form');
    const topicsList = document.getElementById('topics-list');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addTopic();
    });
  
    function addTopic() {
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
  
      if (title && description) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
        topicsList.appendChild(li);
  
        form.reset();
      }
    }
  });
  
  let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const loginLink = document.getElementById('loginLink');
  const logoutLink = document.getElementById('logoutLink');
  const menuBackground = document.querySelector('.menu-background');
  
  function updateUI() {
    if (isLoggedIn) {
      loginLink.style.display = 'none';
      logoutLink.style.display = 'inline';
      menuBackground.classList.add('logged-in');
    } else {
      logoutLink.style.display = 'none';
      loginLink.style.display = 'inline';
      menuBackground.classList.remove('logged-in');
    }
  }
  
  updateUI();
  
  loginLink.addEventListener('click', () => {
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateUI();
  });
  
  logoutLink.addEventListener('click', () => {
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    updateUI();
  });