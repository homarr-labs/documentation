import React from 'react';

import styles from './styles.module.css';

export default function GenericReviewContainer({ children }) {
  return <div className={styles.genericReviewContainer}>{children}</div>;
}

export const SocialMediaReview = ({ username, profilePicture, link, plattform, fullText }) => {
  return (
    <GenericReviewContainer>
      <div className={styles.genericReviewUserContainer}>
        <img src={profilePicture} alt="Profile Picture" className={styles.genericReviewUserImage} />
        <div>
          <b className={styles.genericReviewUserName}>{username}</b>
          <a className={styles.genericReviewUserLink} href={link} target="_blank">
            on {plattform}
          </a>
        </div>
      </div>

      <p>{fullText}</p>
    </GenericReviewContainer>
  );
};
