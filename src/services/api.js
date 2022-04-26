export async function getCategories(id) {
  // Implemente aqui
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/categories=${id}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (erro) {
    return erro;
  }
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
