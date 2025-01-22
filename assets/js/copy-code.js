document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre').forEach((pre) => {
      const button = document.createElement('button');
      button.textContent = 'Copy';
      button.style.position = 'absolute';
      button.style.top = '0.5em';
      button.style.right = '0.5em';
      button.style.background = '#007bff';
      button.style.color = '#fff';
      button.style.border = 'none';
      button.style.padding = '0.3em 0.7em';
      button.style.cursor = 'pointer';
      button.style.fontSize = '0.8em';
      
      pre.style.position = 'relative';
      pre.appendChild(button);
  
      button.addEventListener('click', () => {
        const code = pre.querySelector('code');
        if (code) {
          navigator.clipboard.writeText(code.innerText).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 2000);
          }).catch(() => {
            button.textContent = 'Failed!';
            setTimeout(() => button.textContent = 'Copy', 2000);
          });
        }
      });
    });
  });
  