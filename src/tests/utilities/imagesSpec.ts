import { resizeImage } from '../../utilities/images';

describe('test resize', () => {
  it('test resize with negative numbers', async () => {
    let errorMessage = 'No error thrown.';

    try {
        await resizeImage('fjord', -200, 200);
    } catch (error) {
        let err = error as Error
        errorMessage = err.message;
    }
    expect(errorMessage).toBe('width and hight must be a postive number!');
  });

  it('test resize with postive numbers', async () => {
    let errorMessage = 'No error thrown.';

    try {
        await resizeImage('fjord', 200, 200);
    } catch (error) {
        let err = error as Error
        errorMessage = err.message;
    }
    expect(errorMessage).toBe('No error thrown.');
  });
});
