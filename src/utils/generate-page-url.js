// https://dev.to/pulljosh/how-to-load-html-css-and-js-code-into-an-iframe-2blc

const getGeneratedPageURL = ({
  html, css, js, setting,
}) => {
  const { targetURL, themeName } = setting;
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const cssURL = getBlobURL(css, 'text/css');
  const jsURL = getBlobURL(js, 'text/javascript');

  const dateNow = Date.now();

  const source = `
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="${targetURL}/wp-content/themes/phoenix/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="${targetURL}/wp-content/themes/phoenix/fontawesome/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="${targetURL}/wp-content/themes/phoenix/fontawesome/css/v4-shims.min.css" />
        <link rel="stylesheet" type="text/css" href="${targetURL}/wp-content/themes/phoenix/css/main.css?${dateNow}" />
        <link rel="stylesheet" type="text/css" href="${targetURL}/wp-content/themes/${themeName}/style.css?${dateNow}" />
        <link rel="stylesheet" type="text/css" href="${targetURL}/wp-json/get/theme" />
        ${targetURL ? `<link rel="stylesheet" type="text/css" href="${targetURL}?custom-css=${dateNow}" />` : ''}
        <script type="text/javascript" src="${targetURL}/wp-includes/js/jquery/jquery.js?${dateNow}"></script>
        <script type="text/javascript" src="${targetURL}/wp-includes/js/jquery/jquery-migrate.min.js?${dateNow}"></script>
        ${css ? `<link rel="stylesheet" type="text/css" href="${cssURL}" />` : ''}
        ${js ? `<script src="${jsURL}"></script>` : ''}
      </head>
      <body>
        ${html || ''}
        <script type="text/javascript" src="${targetURL}/wp-content/plugins/pronto-sidebar-navigation/js/jquery.flexnav.js?${dateNow}"></script>
        <script type="text/javascript" src="${targetURL}/wp-content/themes/phoenix/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="${targetURL}/wp-content/themes/phoenix/js/main.js?${dateNow}"></script>
      </body>
    </html>
  `;

  return getBlobURL(source, 'text/html');
};

export default getGeneratedPageURL;