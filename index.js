module.exports = {
    plugins: [
        'removeEmptyText',
        'removeComments',
        'removeDimensions',
        {
            name: "addClassesToSVGElement",
            params: {
                className: "svg"
            }
        }
    ],
};
