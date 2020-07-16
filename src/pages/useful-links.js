import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const links = [
  'https://tools.ietf.org/html/rfc4566',
  'https://en.wikipedia.org/wiki/Session_Description_Protocol',
  'https://webrtchacks.com/anatomy-webrtc-sdp/'
];

const css = `
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;
const UsefulLink = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <div className="px-16">
        <div className="bg-gray-100 p-2 h-64">
          <h3 className="text-xl hover:text-gray-900 mb-2 underline">Useful links</h3>
          <ul>
            {links.map(link => (<li className="hover:text-gray-900 mb-2"><a href={link}>{link}</a></li>))}
          </ul>
        </div>
      </div>
      <style>{css}</style>
    </Layout>
  );
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default UsefulLink;