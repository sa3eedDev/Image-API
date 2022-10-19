import path from 'path';
import sharp from 'sharp';

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<void> => {
  if (+width <= 0 || +height <= 0) {
    throw new Error('width and hight must be a postive number!');
  } else {
    await sharp(path.join(__dirname, `../../input/${filename}.jpg`))
      .resize(+width, +height) // Added '+' before the variable to make it a number
      .toFile(`output/${filename}_resized.jpg`, function (err: Error) {
        if (err) {
          //return error status if something went wrong
          console.error(err);
        }
      });
  }
};
