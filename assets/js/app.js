const gorevEkleBtn = $(".gorev-btn");
const modal = $(".modal-container");
const modalTwo = $(".modal-container-2")
const modalThree = $(".modal-container-3")
const modalFour = $(".modal-container-4")
const closeIkon = $(".close-ikon");
const closeIkonTwo = $(".close-ikon-2")
const closeIkonThree = $(".close-ikon-3")
const closeIkonFour = $(".close-ikon-4")
const deleteIkon = $(".delete-ikon")
const cssBtn = $(".css-btn-1")
const silBtn = $(".sil-btn")
const modalBtn = $('.modal-btn');
const satirlar=$(".satirlar");
const gorevAdi = $(".gorev-adı-text");
const gorevAciklamasi = $('.gorev-aciklama');
const modalBaslik = $('.gorev-modal-basligi');
const cssSpan=$('.css-span');
const gorevModalAciklama = $('.gorev-modal-aciklamasi');
let gorevAdiVeri = "";
let gorevSayisi = $('.gorev-sayisi');
let cssSatir = $('.css-satir');
let baslik = "";
let gorevAciklamaText="";
let dataAciklama="";


gorevEkleBtn.click(function (){
    modal.fadeIn(500);
    //burda ekleyip fadeout da silicez
    modal.addClass('display-flex');
})

closeIkon.click(function (){
    modal.fadeOut(500)
    setTimeout(function(){
        modal.removeClass('display-flex');
    },500)
})
$(document).on('click',".css-btn-1",function (e){
    //fonksiyonun asıl hedefi
    modalTwo.fadeIn(500);
    modalTwo.addClass('display-flex');
    //Görüntüle butonuna basıldığında başlık ve açıklama değişecek.
    baslik=$(e.currentTarget).parent().siblings('.css-ikon-yazi').find('.css-span').text();
    modalBaslik.text(baslik);
    //css satir datasını değişkenimize atıyoruz.
    dataAciklama=$(e.currentTarget).parent().parent().data('aciklama');
    gorevModalAciklama.text(dataAciklama);
})
closeIkonTwo.click(function (){
    modalTwo.fadeOut(500)
    setTimeout(function(){
        modalTwo.removeClass('display-flex');
    },500)
})


// Yeni görev ekleme - append ve prepend

modalBtn.click(function () {
    /* Görev adı inputundan aldığımız veriyi değişkenin içine atıyoruz. */
    gorevAdiVeri=gorevAdi.val();
    gorevAciklamaText = gorevAciklamasi.val();
    const gorevElementKopya = `
        <div data-aciklama="${gorevAciklamaText}" class="css-satir">
            <div class="css-ikon-yazi">
                <div>
                    <img src="assets/image/gorev-2-ikon.jpg" height="37" width="37">
                </div>
                <div>
                    <span class="css-span">${gorevAdiVeri}</span>
                </div>
            </div>
            <div class="css-butonlar">
                <button class="css-btn-1">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="search-ikon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                     </svg>
                    Görüntüle
                </button>
                <button class="css-btn-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-ikon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                </svg>
                </button>
            </div>
        </div>
`
    //gorev adı boş ise placeholder ile uyarı veriyoruz.
    if(gorevAdi.val()===""){
        console.log("boş")
        gorevAdi.attr("placeholder","Lütfen görev adını doldurunuz.");
        gorevAdi.addClass('input-hata');
    }
    else{


        gorevAdi.removeClass('input-hata');
        gorevAciklamasi.val("");
        gorevAdi.val("");
        satirlar.append(gorevElementKopya);
        modal.fadeOut(500);
        setTimeout(function(){
            modal.removeClass('display-flex');
        },500);
        gorevSayisi.text($('.css-satir').length);


    }
})

//sil butonuna bastığımızda görevi siliyoruz.
//dokuman da click eventi
$(document).on('click',".delete-ikon",function (e){
    //fonksiyonun asıl hedefi
    $(e.currentTarget).parent().parent().parent().fadeOut(500);
    setTimeout(function () {
        let sayiC = gorevSayisi.text($('.css-satir').text());
        let sayiZ =parseInt(sayiC)
        sayiZ=sayiZ-1;
        gorevSayisi.text(sayiZ)
    })
})


gorevSayisi.text(cssSatir.length);