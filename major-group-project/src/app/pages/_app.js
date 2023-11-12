// pages/_app.js
import React from 'react';
import { useRouter } from 'next/router';
import RedirectButton from '../Components/RedirectButton';

function MyApp({ Component, pageProps }) {
    const routes = module.exports = require('next-routes')()
 
routes
.add('about')
.add('blog', '/blog/:slug')
.add('user', '/user/:id', 'profile')
.add('/:noname/:lang(en|es)/:wow+', 'complex')
.add({name: 'beta', pattern: '/v3', page: 'v3'})
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/signUp');
  };

  return (
    <div>
      <RedirectButton onClick={handleClick} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
