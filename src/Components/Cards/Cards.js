import React from 'react';
import styled from 'styled-components';

const MainCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const OverrideCard = styled.div`
  margin: 20px;
  width: 100%;
  max-width: 400px;
`;

const ImgCard = styled.div`
  margin: 0 auto;
`;

const Cards = props => (
  <MainCard>
    {props.data.map(item => (
      <OverrideCard
        className="uk-card uk-card-default"
        key={item.login.username}
      >
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" uk-grid="true">
            <ImgCard>
              <img
                className="uk-preserve-width uk-border-circle"
                alt="img"
                src={item.picture.medium}
              />
            </ImgCard>
          </div>
        </div>
        <div className="uk-card-body">
          <div>
            {item.name.first} {item.name.last}
          </div>
          <div className="uk-text-truncate">
            {' '}
            Phone: {item.phone} <br /> Email: {item.email}
          </div>
        </div>
        <div className="uk-card-footer">
          <a
            href={`/user/${item.login.username}`}
            className="uk-button uk-button-text"
          >
            Read more
          </a>
        </div>
      </OverrideCard>
    ))}
  </MainCard>
);

export default Cards;
