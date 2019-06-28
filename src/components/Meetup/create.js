/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Axios from 'axios';

Axios.defaults.withCredentials = true;
Axios.defaults.useXDomain = true;
Axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT, PATCH';
Axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization';

const CreateMeetup = () => {
  const [formData, setFormData] = useState({});
  const registerInput = (data, type) => setFormData({ ...formData, [type]: data });
  const createMeetup = (evt) => {
    evt.persist();
    evt.preventDefault();
    console.log(formData);
  };

  const handleImageUpload = async (evt) => {
    try {
      evt.persist();
      console.log(evt);
      const [file] = evt.target.files;
      const imageFormData = new FormData();
      imageFormData.append('file', file);
      imageFormData.append('public_id', 'questioner');
      imageFormData.append('timestamp', file.lastModifiedDate);
      imageFormData.append('upload_preset', 'bprir7r7');
      const uploadImage = await Axios.post('https://api.cloudinary.com/v1_1/kobe/image/upload', imageFormData);
      console.log(uploadImage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container w-auto">
      <div id="q-wrapper" className="card mauto m4 p3">
        <form action="/" method="POST">
          <div className="container">
            <h3 className="md-text">Create New Meetup</h3>
            <div className="m1 input">
              <label className="m1" htmlFor="name">
                Topic
                {' '}
                <span className="is-danger">*</span>
              </label>
              <input className="p1 b-rsm" type="text" name="topic" placeholder="Enter topic of meetup" onChange={evt => registerInput(evt.target.value, 'topic')} />
            </div>
            <div className="m1 input">
              <label className="m1" htmlFor="name">
                Location
                {' '}
                <span className="is-danger">*</span>
              </label>
              <input className="p1 b-rsm" name="location" placeholder="Enter location" onChange={evt => registerInput(evt.target.value, 'location')} />
            </div>
            <div className="m1 input">
              <label className="m1" htmlFor="name">Images </label>
              <input className="p1 b-rsm" name="files" type="file" accept="image/*" placeholder="Choose Images" onChange={handleImageUpload} />
            </div>
            <div className="m1 input">
              <label className="m1" htmlFor="name">
                Tags
                {' '}
                <span className="is-danger">*</span>
              </label>
              <input className="p1 b-rsm" type="text" name="tags" placeholder="Seperate with comma" onChange={evt => registerInput(evt.target.value, 'tags')} />
            </div>
            <div className="m1 input">
              <label className="m1" htmlFor="name">
                Happening On
                {' '}
                <span className="is-danger">*</span>
              </label>
              <input className="p1 b-rsm" type="date" name="happeningOn" onChange={evt => registerInput(evt.target.value, 'happeningOn')} />
            </div>
            <div className="m2 input">
              <a className="btn sm box-sh-dark" onClick={createMeetup}>Create</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateMeetup;
