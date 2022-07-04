/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,css}', './public/**/*.{html,js,css}'],
    theme: {
        extend: {
            height: {
                155: '620px',
            },
            spacing: {
                160: '640px',
            },
        },
    },
    plugins: [],
};
