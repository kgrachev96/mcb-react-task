import React, { PropTypes } from 'react';

// import Commit from '../Commit';

export default class CommitContainer extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.commits.map((commit, index) =>
          <div key={index} >
            <ul>
              <li>{commit.commit.message}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

CommitContainer.propTypes = {
  commits: PropTypes.array.isRequired,
};