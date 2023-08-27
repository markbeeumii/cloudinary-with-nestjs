 result = await cloudinary.v2.uploader.upload(
    `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
    {
      folder: "menu-source",
      public_id: req.file.originalname.split('.')[0]
    }
  );