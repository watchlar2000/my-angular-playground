const config = {
  "*.ts": ["eslint --fix", "prettier --write"],
  "*.html": ["eslint --fix", "prettier --write"],
  "*.{json,css,scss,md}": ["prettier --write"],
};

export default config;
