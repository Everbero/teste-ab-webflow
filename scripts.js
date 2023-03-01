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
//links de entrada
//apenas 1 link por linha, entre aspas, separado por virgula
const linksEntrada = ["link-1", "link-2"];
// parametro padrao de cada campanha, formato:
// "linkcampanha1": "?param1=valor1?param2=valor2?parametc=valoretc"],
const defaultParamList = {
  "link-1": "?utm_campaign=padrao1",
  "link-2": "?utm_campaign=padrao2",
};
// links de campanha, formato:
// "linkcampanha1": [ "destino1", "destino2", "destino3", "etc"],
const linksAB = {
  "link-1": ["l-a", "l-b", "l-c"],
  "link-2": ["l-1", "l-2", "l-3"],
};
////////////////////////////////////////////////////////////////////////////
///////////////////  FUNCAO DE REDIRECIONAMENTO ////////////////////////////
////////////////////////////////////////////////////////////////////////////
// verifico se alguma das partes do endereço atual contem o link da campanha
currentPath.some((r) => {
  // se na página atual estiver um dos links lista de links de entrada "linksEntrada"
  if (linksEntrada.includes(r)) {
    // seleciono uma das páginas de destino aleatóriamente na lista de "linksAB"
    let destiny = linksAB[r][Math.floor(Math.random() * linksAB[r].length)];
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
  let thankyou = "www.sitedestino.com.br/pagina-obrigado";
  window.location.href = `${thankyou}${currentSearch}&captura=${currentPath[1]}`;
};

////////////////////////////////////////////////////////////////////////////
///////////////////  FIM DO SCRIPT DE TESTES AB ////////////////////////////
////////////////////////////////////////////////////////////////////////////
