var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'heart-outline.svg',
'heart.svg'
];

function trocar(){

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("agni").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia

}