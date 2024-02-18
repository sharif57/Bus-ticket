const allBtn = document.getElementsByClassName('kbd')

let count = 0
let countLoss = 40;
let total = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function () {
        btn.classList.add('bg-green-400')
        count = count + 1;
        document.getElementById('seat-count').innerText = count
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
        document.getElementById('total').innerText = total
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
    }
    else if (couponCode === 'COUPLE20') {
        const grandTotal = document.getElementById('discount')
        const discountAmount = total - (total * 20 / 100);
        grandTotal.innerText = discountAmount;
    }
    else {
        alert('plz current coupon code')
    }

})