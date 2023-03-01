# Webflow teste AB
Este é um plugin Javascript que serve para realizar testes AB em sites do webflow e congêneres, para utilizar em seu site você deter ter a capacidade de incluir código javascript customizado no header do site. Nesta versão é possível rodar mais de uma campanha no mesmo site, veja como configurar abaixo:

# Como utilizar este plugin?
Na seção de configurações do plugin você deve preenhcer 3 variáveis principais:

### linksEntrada
Nesta constante você criará a lista das páginas de entrada a serem utilizadas em sua campanha, no webflow **você precisa criar** essas páginas para que não ocorra um erro 404, o link é o url da página, geralmente é este link que você irá utilizar em sua campanha de anúncios.

Por exemplo, se você tiver duas campanhas, você deve criar uma página de entrada para cada uma delas e colocar o link nesta lista.
Você deve preencher os itens dentro de [], o link de cada página deve estar entre aspas e separados por vírgula, **não coloque virgula após o último item**!

Exemplo:

    const linksEntrada = [
        "link-pagina-1", 
        "link-pagina-2"
    ];


### defaultParamList
Esta constante é um objeto onde você irá listar os parametros padrão para utilizar em sua campanha AB, este é um parametro pra você usar caso seu usuário acesse a página de entrada diretamente. Nesta lista você deve preenhcer os parametros dentro de {}, no formato "pagina de entrada": "parametro da página", onde a página de entrada deve ser um dos links de entrada, veja um exemplo abaixo:

    const defaultParamList = {
        "link-pagina-1": "?parametro_padrao1=valor_do_parametro",
        "link-pagina-2": "?parametro_padrao2=valor_do_parametro"
    }


### linksAB
Esta constante guarda  os links para onde o usuário será redirecionado, dependendo da campanha que ele acionar, nesta lista você deve preenhcer dentro de {}, no formato "página de entrada" : ["link 1", "link 2, "link 3"], onde a página de entrada é uma referencia ao link de entrada, e os links são as páginas para onde o usuário poderá ser redirecionado aleatóriamente, veja o exemplo abaixo:

    const linksAB = {
        "link-pagina-1": ["pagina-a", "pagina-b", "pagina-c"],
        "link-pagina-2": ["pagina-1", "pagina-2", "pagina-3"]
    };

### redirectTYP
Esta função armazena o link de redirecionamento que deverá ser acionado em algum formato e enviar o seu usuário para a página de obrigado, nesta função preencha apenas o valor da variável thankyou que deve conter o link do site para onde você irá redirecionar o seu usuário, veja o exemplo:

    const redirectTYP = () => {
        let thankyou = "www.seitedestino.com.br/pagina-obrigado";
        window.location.href =
            `${thankyou}${currentSearch}&captura=${currentPath[1]}`;
    };