import { useState } from 'react';

// Zadání 1: Vytvořte stavy pro login a heslo a propojte je obousměrně s příslušnými inputy ve formuláři.

// Zadání 2: Na formulář pověstě obsluhu události `onSubmit`. Nezapomeňte na `e.preventDefault`. Po odeslání formuláře vypište do konzole objekt se dvěma vlastnostmi: `login` a `password`, které budou obsahovat aktuální hodnoty z inputů.

// Zadání 3: Vytvořte si stav `error`, bude obsahovat zprávu pro uživatele, pokud něco vyplní špatně. Na začátku bude mít prázdnou hodnotu prázdný řetězec. Zobrazte obsah tohoto stavu v prvku `.alert`.

// Zadání 4: Pokud uživatel nechal prázdné pole s loginem, nastavte při odeslání formuláře do stavu `error` text `Chybí login`.

// Zadání 5: Pokud uživatel nechal prázdné pole s heslem, nastavte při odeslání formuláře do stavu `error` text `Chybí heslo`.

// Zadání 6: Pokud uživatel správně vyplnil obě pole, do stavu `error` nastavte text `Přihlášení proběhlo úspěšně`.

export const Ukol4 = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const user = {
      login: login,
      password: password,
    };
    console.log(user);
    if (login === '' || password === '') {
      setError('error!!!');
    } else {
      setError('Přihlášení proběhlo úspěšně');
    }
  };

  return (
    <>
      <h1>Úkol 4</h1>
      <div className="alert">{error}</div>
      <form onSubmit={onSubmitForm}>
        <div className="field">
          <label>
            Login:
            <input value={login} onChange={onChangeLogin} type="text" />
          </label>
        </div>
        <div className="field">
          <label>
            Heslo:
            <input
              value={password}
              onChange={onChangePassword}
              type="password"
            />
          </label>
        </div>
        <button type="submit">Přihlásit</button>
      </form>
    </>
  );
};
