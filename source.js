function foo(e) {
  const article1 = document.getElementById('article-1');
  const article2 = document.getElementById('article-2');

  if (article1.style.maxWidth == '') {
    article1.style.position = 'absolute';
    article1.style.maxWidth = '25%';
    article2.style.maxWidth = '100%';
  } else {
    article1.style.maxWidth = '';
    article2.style.maxWidth = '100%';
  }
}

function abrirModal() {
  document.getElementById('modal').style.top = '0';
}
function fecharModal() {
  document.getElementById('modal').style.top = '-100%';
}
