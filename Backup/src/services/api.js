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
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (erro) {
    return erro;
  }
}
