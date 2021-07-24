const parseQueryProduct = (query) => {
  return {
    pageIndex: query.page ? query.page : 1,
    sort: query.sort ? query.sort : '',
    order: query.order ? query.order : '',
    category: query.category ? query.category : '',
    search: query.search ? query.search : '',
    limit: query.limit ? query.limit : '',
  };
};
export default parseQueryProduct;
