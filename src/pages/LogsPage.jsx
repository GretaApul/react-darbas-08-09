import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

export const LogsPage = () => {
  return (
    <div>
      <div className="pets-title-container">
        <h1 className="pets-title">Pets List</h1>
        <div>
          <Link to={'addPrecription'}>
            <Button>ADD PRESCRIPTION</Button>
          </Link>
          <Link to={'addLog'}>
            <Button clas={'reverse'}>ADD LOG</Button>
          </Link>
        </div>
      </div>
      <div className="filter">
        <p className="filter-title">Display:</p>
        <button>
          LOGS <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <button>
          Prescription<i className="fa fa-check" aria-hidden="true"></i>
        </button>
      </div>
      {/* <PetsCardList /> */}
    </div>
  );
};