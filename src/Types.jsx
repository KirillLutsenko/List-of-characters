import PropTypes from 'prop-types';

export const PersonagesType = {
  personages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    birth__year: PropTypes.string,
  })),
  selectedPersonage: PropTypes.string.isRequired,
  onPersonageSelected: PropTypes.func.isRequired,
};

export const PersonageCommentsType = {
  selectedPersonage: PropTypes.func.isRequired,
  closeComments: PropTypes.func.isRequired,
}.isRequired;

export const NewCommentFormType = {
  addComment: PropTypes.func.isRequired,
  closeComments: PropTypes.func.isRequired,
};
