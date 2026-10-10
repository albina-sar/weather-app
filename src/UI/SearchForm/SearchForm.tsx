import React, { useState } from "react";
import { type SearchFormProps } from "./type";
import styles from './SearchForm.module.css'

function SearchForm({ onSearch }: SearchFormProps) {
  
  const [city, setCity] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity('');
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.h2}>Наименование города</h2>
        <input
        className={styles.input}
          type="text"
          value={city}
          placeholder="Введите значение"
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">Найти</button>
      </form>
    </div>
  );
}

export default SearchForm;
