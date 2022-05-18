module.exports = {
    plugins: [
        'removeEmptyText',
        'removeXMLNS',
        'removeComments',
        'convertStyleToAttrs',
        'removeDimensions',
        {
            name: "addClassesToSVGElement",
            params: {
                className: "svg"
            }
        }
    ],
};
