import React, { useState } from 'react';
import { NewCommentFormType } from '../../Types';
import './NewCommentForm.scss';

export const NewCommentForm = ({ addComment, closeComments }) => {
  const [comment, setComment] = useState('');

  const resetForm = () => {
    setComment('');
  };

  const commentHandleChange = (event) => {
    const { value } = event.target;

    setComment(value);
  };

  return (
    <>
      <form
        className="comments__comment-form comment-form"
        onSubmit={(event) => {
          event.preventDefault();

          addComment(comment);
          resetForm();
        }}
      >
        <textarea
          name="comment"
          placeholder="Type comment here"
          className="comment-form__input"
          value={comment}
          onChange={commentHandleChange}
          rows='6'
          cols='40'
        />

        <div className="comment-form__buttons">
          {comment.length === 0 ? (
            <button
              type="submit"
              className="comment-form__submit-button button button--disabled"
              disabled
            >
              Add a comment
            </button>
          ) : (
            <button
              type="submit"
              className="comment-form__submit-button button"
            >
              Add a comment
            </button>
          )}

          <button
            className="comment-form__close-button button"
            type="button"
            onClick={closeComments}
          >
            Hide comments
          </button>
        </div>
      </form>
    </>
  );
};

NewCommentForm.propTypes = NewCommentFormType;
