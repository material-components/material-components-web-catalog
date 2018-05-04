const isDevelopment = process.env.NODE_ENV === 'development';
const publicUrl = isDevelopment ? '' : '/material-components-web-catalog';
const imagePath = `${window.location.origin}${publicUrl}/static/media`;

export {imagePath};
