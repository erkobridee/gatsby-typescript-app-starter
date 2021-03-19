/**
 * transform a binary image to its base64 image string
 *
 * @param {Blob} imageBlob - image binary
 * @return {string} image as a base64 string
 */
export const readImageBlobAsDataURL = async (imageBlob: Blob): Promise<string> => {
  const imageReader = new FileReader();
  return new Promise<string>((resolve) => {
    const load = () => {
      imageReader.removeEventListener('load', load);
      resolve(imageReader.result as string);
    };
    imageReader.addEventListener('load', load, false);
    imageReader.readAsDataURL(imageBlob);
  });
};

export default readImageBlobAsDataURL;
