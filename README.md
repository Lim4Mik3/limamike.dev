# Projeto - Visualização de Ativos em Árvore (TRACTIAN Challenge)

## Go live AT: https://limamike.dev

## Demonstracao

[Assista o vídeo](/demo.webm)

## Introdução

Este projeto é uma aplicação para visualizar a hierarquia de ativos de uma empresa em formato de árvore. Ele permite que o usuário veja locais, ativos e componentes organizados de forma clara e estruturada. Cada ativo pode conter sub-ativos e componentes, e a visualização facilita a gestão e manutenção desses ativos.

## Tecnologias Utilizadas

- **React** para construção da interface.
- **React Query** para buscar dados da API e gerenciar o cache.
- **Zustand** para gerenciamento de estado global.
- **TypeScript** para segurança de tipos no código.
- **Programação Orientada a Objetos (POO)**: Escolhida pela facilidade de manipular a lógica dos ativos de forma organizada, considerando a complexidade do projeto.

## Funcionalidades

- **Árvore de Ativos**: Exibe a hierarquia completa dos ativos, sub-ativos, locais e componentes.
- **Filtros**:
  - **Busca por nome**: Filtra os itens pelo nome do ativo, componente ou local.
  - **Sensores de energia**: Filtra componentes que possuem sensores do tipo energia.
  - **Status crítico**: Filtra os ativos que estão com status de alerta.

## Melhorias Futuras

Embora o projeto já tenha as principais funcionalidades, existem alguns pontos que podem ser melhorados no futuro:

1. **Debounce no Input de Busca**: Colocar um atraso de 350ms para evitar que a busca seja executada a cada tecla pressionada, o que melhora a performance e evita sobrecarga.

2. **Responsividade Mobile**: Adaptar melhor a interface para dispositivos móveis, já que atualmente ela está mais otimizada para telas maiores. Com isso, a experiência em smartphones seria mais fluida.

3. **Melhorias de UX/UI**: Adicionar feedbacks visuais, como indicadores de carregamento ao aplicar filtros ou enquanto os dados estão sendo carregados da API, além de otimizar a navegação na árvore, possibilitando expandir ou colapsar todos os itens de uma vez.

4. **Tratamento de Erros**: Implementar mensagens de erro mais detalhadas, como "Nenhum ativo encontrado com esses filtros" ou "Erro ao carregar dados", para melhorar a comunicação com o usuário quando algo não funcionar corretamente.

5. **Carregamento sob Demanda (Lazy Loading)**: Em árvores muito grandes, poderia ser interessante carregar os nós da árvore conforme o usuário vai expandindo os itens, para evitar longos tempos de carregamento iniciais.

6. **Acessibilidade**: Melhorar o suporte para navegação por teclado e leitores de tela, garantindo que o projeto siga boas práticas de acessibilidade.

7. **Cobertura de testes**: Cobrir a basecode com teste unitarios e de regressao visual para garantir a fidelidade na entrega de novas funcionalidade;