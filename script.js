function toggleMenu(){document.getElementById('navMenu').classList.toggle('show');}
function submitForm(event){
  event.preventDefault();
  const name=document.getElementById('name').value.trim();
  const msg=document.getElementById('formMessage');
  msg.textContent = `Thank you, ${name}! Your enquiry has been noted. We'll contact you soon.`;
  event.target.reset();
}
