import {createData, fetchData} from './utils';

const eventBase = `api/event/`;

export const fetchEvent = async (eventId = null) => {
  try {
    return await fetchData(eventBase + (eventId || ''));
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
};

export const createEvent = async eventData => {
  try {
    return await createData(eventBase, eventData);
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};
