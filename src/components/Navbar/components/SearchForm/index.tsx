import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './styles.module.scss';

function SearchForm({ handleSubmit, className }) {
  return (
    <form onSubmit={handleSubmit} className={`${className} ${styles.form}`}>
      <Field name="searchField" component="input" className={styles.search} />
      <button type="submit" className={styles.button}>
        <img src=""/>
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'searchForm'
})(SearchForm);