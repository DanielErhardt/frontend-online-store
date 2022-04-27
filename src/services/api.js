export async function getCategories() {
  // Implemente aqui
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (erro) {
    return erro;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  // Código do Matheus
  let endpoint = '';

  if (query === '' && categoryId) {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (categoryId === '' && query) {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (erro) {
    return erro;
  }
}
