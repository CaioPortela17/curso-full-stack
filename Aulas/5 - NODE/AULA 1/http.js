const http = require('http');

const produtos = [
  { id: 1, nome: 'Teclado', valor: 150.0, estoque: 10 },
  { id: 2, nome: 'Mouse', valor: 80.5, estoque: 25 },
  { id: 3, nome: 'Monitor', valor: 900.0, estoque: 4 },
];

function responder(res, status, corpo) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(corpo));
}

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // GET /produtos -> lista todos
  if (method === 'GET' && url === '/produtos') {
    return responder(res, 200, produtos);
  }

  // GET /produtos/:id -> um produto
  const match = url.match(/^\/produtos\/(\d+)$/);
  if (method === 'GET' && match) {
    const produto = produtos.find((p) => p.id === Number(match[1]));
    if (!produto) {
      return responder(res, 404, { erro: 'Produto não encontrado' });
    }
    return responder(res, 200, produto);
  }

  // Qualquer outra rota/método cai aqui -> 404
  responder(res, 404, { erro: 'Rota não encontrada' });
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
