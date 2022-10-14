import sharp from 'sharp';
import express from 'express';
import path from 'path';
import fs from 'fs';

// Middlewares for image proccessing

// Method to resize the image if the image it is not resized already
export const resize = async (req: express.Request, res: express.Response) => {
  // Query the arguments from the URL and get the width and height
  const width: number = req.query.width as unknown as number;
  const height: number = req.query.height as unknown as number;

  // Use sharp to resize the image
  await sharp(path.join(__dirname, `../../input/${req.query.filename}.jpg`))
    .resize(+width, +height) // Added '+' before the variable to make it a number
    .toFile(`output/${req.query.filename}_resized.jpg`, function (err: Error) {
      //save new resized image
      if (err) {
        //return error status if something went wrong
        res.status(411);
        res.send({ error: 'Error during resizing' });
      }
      // Responed with the new resized image
      res.sendFile(
        path.join(__dirname, `../../output/${req.query.filename}_resized.jpg`)
      );
    });
};

// Check cache for the resized image
export const checkCache = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  // Check if image is avaliable in output file
  if (
    fs.existsSync(
      path.join(__dirname, `../../output/${req.query.filename}_resized.jpg`)
    )
  ) {
    // If it is avaliable check if it is the right dimensions
    const image = await sharp(
      path.join(__dirname, `../../output/${req.query.filename}_resized.jpg`)
    ).metadata();
    // if it doesn't match the dimensions make a new image else respond with the cached image
    if (image.width != req.query.width || image.height != req.query.height) {
      next();
    } else {
      res.sendFile(
        path.join(__dirname, `../../output/${req.query.filename}_resized.jpg`)
      );
    }
  } else {
    next();
  }
};

// Check if the file in the input file
export const checkInput = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  // If file in input file go to the next function else respond with error message
  if (
    await fs.existsSync(
      path.join(__dirname, `../../input/${req.query.filename}.jpg`)
    )
  ) {
    next();
  } else {
    res.status(410);
    res.send({ error: 'image not found in input file' });
  }
};