const btnArrow = document.querySelector('.arrow')
const imgShow = document.querySelector('.item')
const arrowIcon = document.querySelector('.fa-arrow-down')

function showImg() {
	// btnArrow.classList.add('show')
	imgShow.classList.toggle('show')
  if (imgShow.classList.contains('show')) {
    console.log('Ok')
  } else {
    console.log('Nie ma')
  }
}

function rotateImg() {
	arrowIcon.classList.toggle('rotate')
}

btnArrow.addEventListener('click', showImg)
btnArrow.addEventListener('click', rotateImg)
