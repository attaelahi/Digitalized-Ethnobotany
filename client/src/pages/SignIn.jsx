import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-green-400 to-green-300'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg'>
        {/* Logo and Description */}
        <div className='text-center mb-6'>
          <Link to='/' className='text-4xl font-bold text-gray-800'>
            <span className='px-3 py-1 bg-green-600 rounded-lg text-white'>
              Digitalized
            </span>
            Ethnobotany
          </Link>
          <p className='text-sm text-gray-600 mt-3'>
            Welcome! Sign in with your email and password or use Google.
          </p>
        </div>

        {/* Form Section */}
        <form className='space-y-6' onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <Label value='Your email' className='text-gray-700' />
            <TextInput
              type='email'
              placeholder='name@company.com'
              id='email'
              onChange={handleChange}
              className='mt-1 block w-full border-green-400 focus:ring-green-500'
            />
          </div>

          {/* Password Input */}
          <div>
            <Label value='Your password' className='text-gray-700' />
            <TextInput
              type='password'
              placeholder='**********'
              id='password'
              onChange={handleChange}
              className='mt-1 block w-full border-green-400 focus:ring-green-500'
            />
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={loading}
            className='w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700'
          >
            {loading ? (
              <>
                <Spinner size='sm' className='mr-3' />
                <span>Loading...</span>
              </>
            ) : (
              'Sign In'
            )}
          </Button>

          {/* OAuth Section */}
          <OAuth  />
        </form>

        {/* Sign Up Redirect */}
        <div className='flex justify-center mt-5 text-sm text-gray-600'>
          <span>Dont have an account?</span>
          <Link to='/sign-up' className='ml-1 text-green-600 hover:underline'>
            Sign Up
          </Link>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}
