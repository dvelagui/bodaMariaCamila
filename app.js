const agenda = document.getElementById('agenda');
const listaRegalos = document.getElementById('listaRegalos');
const btnAgenda = document.getElementById('btnAgenda');
const btnRegalos = document.getElementById('btnRegalos');
const aporteAqui = document.querySelectorAll(".ecommerce .aporte-aqui");
const messageModal = document.getElementById('exampleModalLabel');
const closeModal = document.querySelector('.btn-close');

console.log(aporteAqui[0].dataset.aporte);

aporteAqui.forEach(aportes => {
  aportes.addEventListener('click', () => {
    let msg = aportes.dataset.aporte; 
    console.log(msg);
    return messageModal.innerText = `Aporte para ${msg}`
  })
})


const aporta = () => {
    const refer = Math.floor(Math.random() * 300);
    const valor = document.getElementById('valor').value;
    const nombre = document.getElementById('nombre').value;
    const phone = document.getElementById('phone').value;
    const mail = document.getElementById('mail').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log(mensaje);
    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: valor * 100,
      reference: `${mensaje} - ${refer}`,
      publicKey: 'pub_test_EPOG9mDxjRS8BmqUr3WHiVZLYPjA0BDW',
      customerData: {
        email: `${mail}`,
        fullName: `${nombre}`,
        phoneNumber: `${phone}`,
        phoneNumberPrefix: '+57'
      }
    });
    window.scrollTo({
      top:0,
      behavior: 'auto'
  })

  closeModal.click()



   checkout.open(function ( result ) {
        var transaction = result.transaction
        console.log('Transaction ID: ', transaction.id)
        console.log('Transaction object: ', transaction)
      })
  }

 


btnRegalos.addEventListener('click', () => {
    listaRegalos.style.display = 'block';
    agenda.style.display = 'none';
    window.scrollTo({
        top:0,
        behavior: 'auto'
    })

})

btnAgenda.addEventListener('click', () => {
    listaRegalos.style.display = 'none';
    agenda.style.display = 'block';

})
