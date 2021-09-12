function showAll()
{
  var header = document.getElementsByTagName('header')[0];
  var text = header.innerHTML;
  text += `<h1>${document.title}</h1>`;
  text += `<hr style="color: yellow">`;
  text += `Prof. Eduardo Ono`;
  header.innerHTML = text;

  var footer = document.createElement('footer');
  document.body.appendChild(footer);
  text = `<br><hr style="width: 90%">`;
  text += `<p style="text-align: center">Copyright(c) 2021, Eduardo Ono.</p>`;
  footer.innerHTML = text;
}
