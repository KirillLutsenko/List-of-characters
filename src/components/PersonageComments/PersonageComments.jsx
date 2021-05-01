/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { PersonageCommentsType } from '../../Types';
import { NewCommentForm } from '../NewCommentForm/NewCommentForm';
import './PersonageComments.scss';

export const PersonageComments = ({ selectedPersonage, closeComments }) => {
  const [comments, setComments] = useState({});

  const addComment = (comment) => {
    if (!comments[selectedPersonage]) {
      comments[selectedPersonage] = [];
    }

    setComments({
      ...comments,
      [comments[selectedPersonage]]: comments[selectedPersonage].push(comment)
    });
  }

  return (
    <>
      {selectedPersonage && (
        <div className="app__comments comments">
          {comments[selectedPersonage]
            ? (
              <>
                <h2 className="comments__title">
                  Comments:
                </h2>

                <div className="comments__list list">
                  <ol type="1">
                    {comments[selectedPersonage].map((comment, index) => (
                      <li
                        className="list__item"
                        key={`${comment}${index}`}
                      >
                        {comment}
                      </li>
                    ))}
                  </ol>
                </div>
              </>
            ) : (
              <>
                <h2 className="comments__title">
                  Comments:
                </h2>

                <span className="comments__empty">No comments</span>
              </>
            )
          }

          <NewCommentForm
            addComment={addComment}
            closeComments={closeComments}
          />
        </div>
      )}
    </>
  );
}

PersonageComments.propTypes = PersonageCommentsType;
