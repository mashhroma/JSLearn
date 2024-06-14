const sizeFilter = (products, filter) => {
    if (filter.length > 0) {
        return products.filter(product =>
            filter.includes(product.size))
    }
    return products;
};

export default sizeFilter;
