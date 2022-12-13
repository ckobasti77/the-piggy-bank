const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"), // ???/
        port: 3010,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.png$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};

// const path = require("path");

// module.exports = {
//   mode: "production",
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/i,
//         include: path.resolve(__dirname, "src"),
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         include: path.resolve(__dirname, "src"),
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//     ],
//   },
//   devServer: {
//     static: "dist",
//     port: 3010,
//     compress: true,
//   },
// };
