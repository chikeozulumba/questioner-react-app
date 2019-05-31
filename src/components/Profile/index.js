/* eslint-disable no-console */
import React, {
  Fragment,
  useEffect,
  useState
} from 'react';
import Side from './side';
import Meetup from './meetup';

import axios from '../../lib/axios';

const Profile = () => {
  const [meetups, setMeetups] = useState([]);
  const getAllMetupRecords = async () => {
    try {
      const { data: { data } } = await axios.get('/meetups');
      setMeetups(data[0]);
    } catch (error) {
      return setMeetups([]);
    }
  };
  useEffect(() => {
    getAllMetupRecords();
  }, []);
  return (
    <Fragment>
      <div className="container">
        <div id="v-wrapper">
          <Side />
          <Meetup meetups={meetups || []} />
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
