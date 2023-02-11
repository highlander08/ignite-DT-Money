export default function transactions(request: any, response: any) {
  response.statusCode = 200

  response.json([
    {
      id: 'ahtfnhg',
      description: 'Desenvolvimento de site',
      type: 'income',
      category: 'Venda',
      price: 14000,
      createdAt: '2022-04-13T19:31:42.154Z',
    },
    {
      id: 'hdgse54',
      description: 'Hamburger',
      type: 'outcome',
      category: 'Alimentação',
      price: 50,
      createdAt: '2022-04-10T19:31:42.154Z',
    },
    {
      id: 'khn2yfj',
      description: 'Aluguel do apartamento ',
      type: 'outcome',
      category: 'Casa',
      price: 1200,
      createdAt: '2022-03-27T19:31:42.154Z',
    },
    {
      id: 'fjn2dgf',
      description: 'Computador',
      type: 'income',
      category: 'Venda',
      price: 5400,
      createdAt: '2022-03-15T19:31:42.154Z',
    },
    {
      id: 'ogn12sd',
      description: 'Desenvolvimento de site',
      type: 'income',
      category: 'Venda',
      price: 50,
      createdAt: '2022-03-13T19:31:42.154Z',
    },
    {
      description: 'Batata',
      price: 5,
      category: 'Alimentação',
      type: 'outcome',
      createdAt: '2022-10-17T14:19:01.524Z',
      id: 'A4QBxC7',
    },
    {
      description: 'Cenoura',
      price: 7,
      category: 'Alimentação',
      type: 'outcome',
      createdAt: '2022-10-20T12:20:48.438Z',
      id: '09a4z5s',
    },
  ])
}
