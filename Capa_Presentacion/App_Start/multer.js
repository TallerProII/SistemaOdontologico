import multer from 'multer';

const storage = multer.diskStorage({
  destination: './archivo/files',
  filename: function (_req, file, cb) {
    // Obtiene la extensión del archivo original
    const fileExtension = file.originalname.split('.').pop();

    // Genera un nombre único para el archivo usando la fecha actual y la extensión
    const uniqueFileName = `${Date.now()}.${fileExtension}`;

    // Llama a la función de callback con el nombre del archivo
    cb(null, uniqueFileName);
  }
});

const upload = multer({ storage: storage }).single('ConsDoc');

export default upload;
