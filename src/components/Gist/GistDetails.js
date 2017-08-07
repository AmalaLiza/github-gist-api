import React from 'react';

export const GistDetails = ({ gist , className}) => <div className={className}>
  <div>
    <span className='bold'>Description: </span>
    <span>{gist.get('description')}</span>
  </div>
  <div>
    <span className='bold'>Created At:</span>
    <span> {gist.get('created_at')}</span>
  </div>
  <div>
    <span className='bold'>Gist URL:</span>
    <span> {gist.get('url')}</span>
  </div>
</div>;