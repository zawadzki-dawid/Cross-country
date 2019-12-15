module.exports = {

    getOrganizator: 'SELECT LOGIN_UZYTKOWNIK FROM BIEG WHERE ID_BIEG = ?',

     showProfileQuery: 'SELECT LOGIN_UZYTKOWNIK,IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK, DATA_URODZENIA_UZYTKOWNIK,TYP_UZYTKOWNIK FROM UZYTKOWNIK WHERE LOGIN_UZYTKOWNIK = ? ',

    showStatisticQuery: 'SELECT ID_BIEG,MIEJSCE,CZAS FROM WYNIKI WHERE LOGIN_UZYTKOWNIK = ?',

    editProfileQuery:'UPDATE UZYTKOWNIK SET LOGIN_UZYTKOWNIK=?,IMIE_UZYTKOWNIK =? ,NAZWISKO_UZYTKOWNIK = ?, DATA_URODZENIA_UZYTKOWNIK = ? WHERE LOGIN_UZYTKOWNIK = ?',

    registerUserQuery: 'INSERT INTO Uzytkownik (LOGIN_UZYTKOWNIK, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK,' +
        'DATA_URODZENIA_UZYTKOWNIK, HASHED_PASS_UZYTKOWNIK, TYP_UZYTKOWNIK)' +
        'VALUES (?, ?, ?, ?, ?, ?)',

    doesUserExistQuery:'SELECT LOGIN_UZYTKOWNIK FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',


    sendMessageQuery: 'INSERT INTO Wiadomosc (LOGIN_NADAWCA, LOGIN_ODBIORCA, TRESC_WIADOMOSC) VALUES (?, ?, ?)',

    getMessagesQuery: 'SELECT DATA_WIADOMOSC, TRESC_WIADOMOSC FROM Wiadomosc WHERE LOGIN_ODBIORCA = ? AND LOGIN_NADAWCA = ? LIMIT 10',

    getSendersQuery: 'SELECT DISTINCT LOGIN_NADAWCA, STATUS_WIADOMOSC, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK ' +
        'FROM Wiadomosc INNER JOIN Uzytkownik ON Wiadomosc.LOGIN_NADAWCA = Uzytkownik.LOGIN_UZYTKOWNIK WHERE LOGIN_ODBIORCA = ?',

    addRunQuery: 'INSERT INTO Bieg (DATA_BIEG, ID_TRASA, LOGIN_UZYTKOWNIK, NAZWA_BIEG) VALUES (?, ?, ?, ?)',

    editRunQuery: 'UPDATE Bieg SET NAZWA_BIEG = ? WHERE ID_BIEG = 1 ',

    loginUserQuery: 'SELECT HASHED_PASS_UZYTKOWNIK AS pass, LOGIN_UZYTKOWNIK AS login FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    authUserQuery: 'SELECT TYP_UZYTKOWNIK AS type, LOGIN_UZYTKOWNIK AS login FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    getRunsQuery: 'SELECT ID_BIEG, DATA_BIEG, NAZWA_BIEG, POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK ' +
        'FROM Bieg INNER JOIN Trasa ON Trasa.ID_TRASA = Bieg.ID_TRASA ' +
        'INNER JOIN Uzytkownik ON Uzytkownik.LOGIN_UZYTKOWNIK = Bieg.LOGIN_UZYTKOWNIK WHERE BIEG_AKCEPTACJA = 0',

    isSignedQuery: 'SELECT COUNT(LOGIN_UZYTKOWNIK) AS volunter, (SELECT COUNT(LOGIN_UZYTKOWNIK ) ' +
        'FROM Uczestnicy_Bieg WHERE ID_BIEG = ? AND LOGIN_UZYTKOWNIK = ?) AS runner FROM Wolontariusze_Bieg WHERE ID_BIEG = ? AND LOGIN_UZYTKOWNIK = ?',

    signupVolunteryQuery: 'INSERT Wolontariusze_Bieg (ID_BIEG, LOGIN_UZYTKOWNIK) VALUES(?, ?)',

    signupRunnerQuery: 'INSERT Uczestnicy_Bieg (ID_BIEG, LOGIN_UZYTKOWNIK) VALUES(?, ?)',

    editRouteQuery: 'UPDATE Trasa SET POCZATEK_TRASA = ?, KONIEC_TRASA = ?, MIASTO_TRASA = ?, DLUGOSC_TRASA = ? WHERE ID_TRASA = 1',

    addResultsQuery: 'INSERT INTO wyniki (ID_WYNIK, LOGIN_UZYTKOWNIK, ID_BIEG, MIEJSCE, CZAS) VALUES(?,?,?,?,?)',

    confirmRun: 'UPDATE bieg SET BIEG_AKCEPTACJA = 1 WHERE ID_BIEG = ?',

    removeUser: 'DELETE FROM uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    showRunners: 'SELECT Login_Uzytkownik FROM Uczestnicy_Bieg WHERE ID_BIEG = ?',

};
