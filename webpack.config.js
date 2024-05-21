const path = require('path');

module.exports = {
  mode: 'production', // ou 'production'development
  entry: {
    controller: './ts/controllers/controller.ts',
    limparCampo: './ts/controllers/limparCampo.ts',
    AlertMsgClose: './ts/scripts/alert/AlertMsgClose.ts',
    AlertMsgWin: './ts/scripts/alert/AlertMsgWin.ts',
    close: './ts/scripts/buttons/close.ts',
    reload: './ts/scripts/buttons/reload.ts',
    onClickBack: './ts/scripts/onClick/onClickBack.ts',
    onClickClose: './ts/scripts/onClick/onClickClose.ts',
    //Adicione outras entradas conforme necessário
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Adicione '.js' como uma extensão resolvida
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'js'),
  },
};
