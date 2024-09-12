import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [file2, setFile2] = useState(null); // For second image
  const [imageUploadProgress2, setImageUploadProgress2] = useState(null); // For second image progress
  const [imageUploadError2, setImageUploadError2] = useState(null); // For second image error
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    locality: '',
    family: '',
    localName: '',
    longitude: '',
    latitude: '',
    content: '',
    image: '',
    image2: '',
  });
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUploadImage = async (imageFile, setProgress, setError, imageKey) => {
    try {
      if (!imageFile) {
        setError('Please select an image');
        return;
      }
      setError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + imageFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress.toFixed(0));
        },
        (error) => {
          setError('Image upload failed');
          setProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProgress(null);
            setError(null);
            setFormData({ ...formData, [imageKey]: downloadURL });
          });
        }
      );
    } catch (error) {
      setError('Image upload failed');
      setProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const {
      title,
      category,
      locality,
      family,
      localName,
      longitude,
      latitude,
      content,
      image,
      image2,
    } = formData;

    if (
      !title ||
      !category ||
      !locality ||
      !family ||
      !localName ||
      !longitude ||
      !latitude ||
      !content ||
      !image ||
      !image2
    ) {
      setPublishError('Please provide all required fields');
      return;
    }

    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className='p-6 max-w-3xl mx-auto min-h-screen bg-gray-100 rounded-lg shadow-lg'>
      <h1 className='text-center text-4xl my-7 font-semibold text-teal-600'>Add Plants</h1>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        {/* Title and Category */}
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Name'
            required
            id='title'
            className='flex-1 p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            className='flex-1 p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value=''>Select a category</option>
            <option value='Flowers'>Flowers</option>
            <option value='Trees'>Trees</option>
            <option value='Herbs'>Herbs</option>
            <option value='Shrubs'>Shrubs</option>
          </Select>
        </div>

        {/* Additional Fields */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <TextInput
            type='text'
            placeholder='Locality'
            id='locality'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.locality}
            onChange={(e) =>
              setFormData({ ...formData, locality: e.target.value })
            }
          />
          <TextInput
            type='text'
            placeholder='Family'
            id='family'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.family}
            onChange={(e) =>
              setFormData({ ...formData, family: e.target.value })
            }
          />
          <TextInput
            type='text'
            placeholder='Local Name'
            id='localName'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.localName}
            onChange={(e) =>
              setFormData({ ...formData, localName: e.target.value })
            }
          />
          <TextInput
            type='text'
            placeholder='Longitude'
            id='longitude'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.longitude}
            onChange={(e) =>
              setFormData({ ...formData, longitude: e.target.value })
            }
          />
          <TextInput
            type='text'
            placeholder='Latitude'
            id='latitude'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            value={formData.latitude}
            onChange={(e) =>
              setFormData({ ...formData, latitude: e.target.value })
            }
          />
        </div>

        {/* Image Upload */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between border-2 border-teal-500 rounded-lg p-4'>
          <FileInput
            type='file'
            accept='image/*'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            className='bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600'
            onClick={() => handleUploadImage(file, setImageUploadProgress, setImageUploadError, 'image')}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-72 object-cover rounded-lg shadow-md'
          />
        )}

        {/* Description */}
        <ReactQuill
          theme='snow'
          placeholder='Write description...'
          className='h-72 mb-12 rounded-lg border-2 border-teal-300 focus:border-teal-500'
          required
          value={formData.content}
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />

        {/* Second Image Upload */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between border-2 border-teal-500 rounded-lg p-4'>
          <FileInput
            type='file'
            accept='image/*'
            className='p-3 rounded-lg border-2 border-teal-300 focus:border-teal-500'
            onChange={(e) => setFile2(e.target.files[0])}
          />
          <Button
            type='button'
            className='bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600'
            onClick={() => handleUploadImage(file2, setImageUploadProgress2, setImageUploadError2, 'image2')}
            disabled={imageUploadProgress2}
          >
            {imageUploadProgress2 ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress2}
                  text={`${imageUploadProgress2 || 0}%`}
                />
              </div>
            ) : (
              'Upload Another Image'
            )}
          </Button>
        </div>
        {imageUploadError2 && <Alert color='failure'>{imageUploadError2}</Alert>}
        {formData.image2 && (
          <img
            src={formData.image2}
            alt='upload2'
            className='w-full h-72 object-cover rounded-lg shadow-md'
          />
        )}

        {/* Submit Button */}
        <Button type='submit' className='bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600'>
          Publish
        </Button>
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}