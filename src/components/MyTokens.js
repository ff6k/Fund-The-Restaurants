import React from 'react';
import { Link } from 'react-router-dom'; 

function MyTokens({ tokens }){
  return(
    <div className="container">
      <h1 className="my-3">My Tokens</h1>

      <div className="row">
        {tokens.map(token => {
          return(
            <div className="col-6 col-md-4 col-lg-3 mb-3" key={token.id}>
              <div className="card">
                <div className="card-body px-4">
                  <img className="img-rounded" src={token.tokenURI} alt="NFT" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyTokens;