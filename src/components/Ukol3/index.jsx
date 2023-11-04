import { useState } from 'react';

// Zadání 1: Přidejte na prvek `input` událost `onChange`, která bude do stavu `login` ukládat aktuální hodnotu, kterou uživatel do inputu napíše. Zároveň nastavte `value` políčka na hodnotu ze stavu `login`, takže při načtení stránky v políčku uvidíte výchozí hodnotu `petr`.

// Zadání 2: Na tlačíko přidejte událost `onClick`, která nastaví stav `login` na prázdný řetězec, čímž se vyprázdní i políčko s loginem.

export const Ukol3 = () => {
  const [login, setLogin] = useState('petr');

  const onChangeHandle = (e) => {
    setLogin(e.target.value);
  };

  const clearInput = () => {
    setLogin('');
  };

  return (
    <>
      <h1>Úkol 3</h1>
      <label>
        Login:
        <input value={login} onChange={onChangeHandle} type="text" />
      </label>
      <button onClick={clearInput}>Vymazat</button>
    </>
  );
};
