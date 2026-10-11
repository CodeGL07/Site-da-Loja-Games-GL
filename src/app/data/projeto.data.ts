export const PROJETO = {
    nome: 'GigaGamesGL',
    slogan: 'Sua biblioteca de games, em qualquer tela.',
    resumo:
        'Uma plataforma de distribuição digital de jogos com loja web e aplicativo, ' +
        'compartilhando a mesma conta, o mesmo catálogo e a mesma biblioteca.',
};


export const PILARES = [
    { tag: 'Catálogo', titulo: 'Descoberta de jogos', texto: 'Busca, filtros por gênero e plataforma, páginas de detalhe com descrição, requisitos e avaliações.' },
    { tag: 'Conta', titulo: 'Conta única', texto: 'Um cadastro, um login. O mesmo usuário acessa a loja no navegador e no aplicativo.' },
    { tag: 'Compra', titulo: 'Carrinho e pagamento', texto: 'Fluxo de compra simples, com histórico de pedidos e confirmação por e-mail.' },
    { tag: 'Biblioteca', titulo: 'Biblioteca do jogador', texto: 'Todos os jogos adquiridos ficam salvos na conta e sincronizados entre as plataformas.'},
];

export const PLATAFORMAS = [
    {
        nome: 'GigaGamesGL',
        papel: 'Porta de entrada do projeto',
        itens: ['Catálogo completo e busca', 'Compra e gerenciamento de conta', 'Acesso pelo navegador, sem instalação'],
    },
    {
        nome: 'Aplicativo',
        papel: 'Experiência contínua no dispositivo',
        itens: ['Biblioteca e downloads', 'Notificações de promoções e lançamentos', 'Mesma conta e mesmos dados da loja web'],
    },
];

export const CAMADAS = [
    { nome: 'Clientes', detalhe: 'Site de apresentação e loja (Angular) / Aplicativo' },
    { nome: 'API', detalhe: 'Autenticação, catálogo, pedidos, biblioteca' },
    { nome: 'Banco de dados', detalhe: 'Usuários, jogos, pedidos, licença' },
];

export const FASES = [
    { fase: 'Fase 1', titulo: 'Levantamento e planejamento', status: 'Em andamento', texto: 'Definição de escopo, requisitos funcionais e não funcionais, modelagem inicial.' },
  { fase: 'Fase 2', titulo: 'Site de apresentação', status: 'Em andamento', texto: 'Site em Angular explicando o projeto e servindo de base para a loja web.' },
  { fase: 'Fase 3', titulo: 'API e banco de dados', status: 'Planejado', texto: 'Autenticação, catálogo, pedidos e biblioteca de jogos.' },
  { fase: 'Fase 4', titulo: 'Loja web', status: 'Planejado', texto: 'Evolução do site para catálogo, carrinho e conta do usuário.' },
  { fase: 'Fase 5', titulo: 'Aplicativo', status: 'Planejado', texto: 'App consumindo a mesma API, com biblioteca e notificações.' },
];