  ////////////////////////////////////////////////////////////////////////////
 ////////   AB TEST JS - douglas@3xweb.site - https://3xweb.site ////////////
////////////////////////////////////////////////////////////////////////////
// pego o endereço atual da página e separo os itens do url
const currentPath = window.location.pathname.split("/");
// pego os paramentros do url
const currentSearch = window.location.search;
  /////////////////////////////////////////////////////////// 
 ////////////////  CONFIGURAÇÔES DO PLUGIN  ////////////////
///////////////////////////////////////////////////////////
// parametro padrao de cada campanha, formato:
// "linkcampanha1": "?param1=valor1?param2=valor2?parametc=valoretc"],
const defaultParamList = {
  "l23-0": "?utm_campaign=gif-if01-vend-direto-neutro-org-x-x-x",
  "l24-0": "?utm_campaign=gif-if01-vend-direto-neutro-org-x-x-x"
}
//links de entrada
//apenas 1 link por linha, entre aspas, separado por virgula
const linksEntrada = [
  "l23-0", 
  "l24-0"
];
// links de campanha, formato:
// "linkcampanha1": [ "destino1", "destino2", "destino3", "etc"],
const linksAB = {
  "l23-0": ["l23-a", "l23-b", "l23-c"],
  "l24-0": ["l24-1", "l24-2", "l24-3"]
};
   ////////////////////////////////////////////////////////////////////////////
  ///////////////////  FUNCAO DE REDIRECIONAMENTO ////////////////////////////
 ////////////////////////////////////////////////////////////////////////////
// verifico se alguma das partes do endereço atual contem o link da campanha
currentPath.some((r) => {
  // se na página atual estiver um dos links lista de links de entrada "linksEntrada"
  if (linksEntrada.includes(r)) {
    console.log("campanha encontrada:", r);
    // seleciono uma das páginas de destino aleatóriamente na lista de "linksAB"
    let destiny =
    linksAB[r][Math.floor(Math.random() * linksAB[r].length)];
      // encaminho o usuário para a página de destino

    if (!currentSearch.length) {
      // se não houverem parametros preencho o url com o parametro padrão de "defaultParamList"
      window.location.href = `${destiny}${defaultParamList[r]}&captura=${destiny}`;
    } else {
      // se houverem parametros encaminho para o url destino
      window.location.href = `${destiny}${currentSearch[r]}&captura=${destiny}`;
    }
  }
});

const redirectTYP = () => {
  let thankyou = "www.lucianofernandesif.com.br/workshop-obrigado";
  window.location.href =
    `${thankyou}${currentSearch}&captura=${currentPath[1]}`;
};

  ////////////////////////////////////////////////////////////////////////////
 ///////////////////  FIM DO SCRIPT DE TESTES AB ////////////////////////////
////////////////////////////////////////////////////////////////////////////