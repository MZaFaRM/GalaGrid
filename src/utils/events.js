import {Buffer} from 'buffer';
import RNFetchBlob from 'rn-fetch-blob';

const deleteCachedImages = async () => {
  try {
    const cacheDir = RNFetchBlob.fs.dirs.CacheDir;
    const files = await RNFetchBlob.fs.ls(cacheDir);
    const regex = /^event_image\d+\.jpeg$/;
    for (const file of files) {
      if (regex.test(file)) {
        await RNFetchBlob.fs.unlink(`${cacheDir}/${file}`);
      }
    }
    console.log('Cached images deleted successfully.');
  } catch (error) {
    console.error('Error deleting cached images:', error);
  }
};

export const cleanData = async (events, many = true) => {
  const eventsData = many ? events : [events];

  for (let i = 0; i < eventsData.length; i++) {
    const event = eventsData[i];
    const encodedImage = event.image;

    const decodedImage = Buffer.from(encodedImage, 'base64');
    const path = RNFetchBlob.fs.dirs.CacheDir + '/event_image' + i + '.jpeg';

    const decodedImageString = decodedImage.toString('base64');
    await RNFetchBlob.fs.writeFile(path, decodedImageString, 'base64');

    eventsData[i].image = 'file://' + path;

    await RNFetchBlob.fs.unlink(path);
  }
  return many ? eventsData : eventsData[0];
};

export const emptyTodo = [
  {
    data: '',
    status: null,
  },
];

export const todoStates = {
  cancelled: 'times-circle',
  done: 'check-circle',
  none: 'minus-circle',
};
export const todoColors = {
  red: '#DC143C',
  green: '#90D26D',
  grey: '#BFBFBF',
};
