const container = document.createElement('div');

export const error = (message) => {
    container.style.zIndex = '100';
    container.style.position = 'absolute';
    container.style.width = '300px';
    container.style.right = '50%';
    container.style.transform = 'translateX(50%)';
    container.style.top = '55px';
    container.style.padding = '10px 3px';
    container.style.fontSize = '12px';
    container.style.textAlign = 'center';
    container.style.backgroundColor = '#ffaa99';
    container.textContent = message;
    document.body.append(container);
    setTimeout(() => container.remove(), 3500);
};
