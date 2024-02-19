const allBtn = document.getElementsByClassName('kbd')

let count = 0
let countLoss = 40;
let total = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function () {
        count = count + 1;
        
        if (count > 4) {
            alert('one person must have four seat!')
            count.removeEventListener('click', function () {

            })
        }
        document.getElementById('seat-count').innerText = count;
        btn.classList.add('bg-green-400')
        countLoss = countLoss - 1;
        document.getElementById('seat-loss').innerText = countLoss;

        const prices = parseInt(document.getElementById('price').innerText)
        const btnName = btn.innerText
        const titleContainer = document.getElementById('container')
        const div = document.createElement('div')


        div.classList.add('flex')
        div.classList.add('lg:gap-[240px]')
        div.classList.add('gap-[56px]')
        div.classList.add('mt-[24px]')
        div.classList.add('font-extrabold')
        const p = document.createElement('p')
        p.innerText = btnName

        const p1 = document.createElement('p')
        p1.innerText = 'employee';

        const p2 = document.createElement('p')
        p2.innerText = prices


        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        titleContainer.appendChild(div);

        total = total + prices;
        document.getElementById('total').innerText = total;

        const grandTotal = document.getElementById('discount')
        const discountAmount = total;
        grandTotal.innerText = discountAmount

    })

}

const btn = document.getElementById('btn-apply');
btn.addEventListener('click', function () {

    const couponElement = document.getElementById('input-field').value;
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    if (couponCode === 'NEW15') {
        const grandTotal = document.getElementById('discount')
        const discountAmount = total - (total * 15 / 100);
        grandTotal.innerText = discountAmount
        hideElementById('applyId')

    }
    else if (couponCode === 'COUPLE20') {
        const grandTotal = document.getElementById('discount')
        const discountAmount = total - (total * 20 / 100);
        grandTotal.innerText = discountAmount;
        hideElementById('applyId')
    }
    else {
        alert('plz current coupon code')
    }
})

function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function done() {
    hideElementById('header')
    hideElementById('main')
    hideElementById('footer')
    showElementById('show')
}