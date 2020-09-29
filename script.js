const smallCups = document.querySelectorAll('.cup-small');
const quarts = document.getElementById('quarts');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => cup.addEventListener('click', () => highlightCups(index)))

function highlightCups(index) {

    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling?.classList.contains('full')) {
        index--;
        }
            
    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.full').length;
    const totalCups = smallCups.length;
    if (!fullCups){
        percentage.innerText = '';
        percentage.style.height = 0
        } else {
    percentage.innerText = `${fullCups / totalCups * 100}%`;
    percentage.style.height = `${fullCups / totalCups * 100}%`;
    }
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = '0'
    } else {
        remained.style.visibility = 'visible';
        if (fullCups === 7) {
            quarts.innerText = `${totalCups - fullCups} cup`;
        } else {
        quarts.innerText = `${totalCups - fullCups} cups`;
        }
    }
}
