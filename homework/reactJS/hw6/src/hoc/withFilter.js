const withFilter = (products, filter) => {
    switch (filter) {
        case 'available':
            return products.filter(product => product.available)
        case 'unavailable':
            return products.filter(product => !product.available)
        default:
            return products;
    }
};

export default withFilter;
