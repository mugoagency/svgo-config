module.exports = {
    plugins: [
        'removeDimensions',
        {
            name: "addClassesToSVGElement",
            params: {
                className: "svg"
            }
        }
    ],
};
