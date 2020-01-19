module.exports = {
    registerUserQuery: 'INSERT INTO Uzytkownik (LOGIN_UZYTKOWNIK, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK,' +
        'DATA_URODZENIA_UZYTKOWNIK, HASHED_PASS_UZYTKOWNIK, TYP_UZYTKOWNIK)' +
        'VALUES (?, ?, ?, ?, ?, ?)',

    editProfileQuery:'UPDATE Uzytkownik SET IMIE_UZYTKOWNIK=?, NAZWISKO_UZYTKOWNIK = ?, DATA_URODZENIA_UZYTKOWNIK = ? WHERE LOGIN_UZYTKOWNIK = ?',

    showStatisticQuery: 'SELECT MIEJSCE as place, CZAS as time, NAZWA_BIEG as name FROM Wyniki INNER JOIN Bieg_Zakonczony ON Wyniki.ID_BIEG = Bieg_Zakonczony.ID_BIEG WHERE Wyniki.LOGIN_UZYTKOWNIK = ?',

    doesUserExistQuery:'SELECT LOGIN_UZYTKOWNIK FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    sendMessageQuery: 'INSERT INTO Wiadomosc (LOGIN_NADAWCA, LOGIN_ODBIORCA, TRESC_WIADOMOSC) VALUES (?, ?, ?)',

    getMessagesQuery: 'SELECT DATA_WIADOMOSC, TRESC_WIADOMOSC, LOGIN_NADAWCA FROM Wiadomosc WHERE LOGIN_ODBIORCA = ? AND LOGIN_NADAWCA = ? OR LOGIN_ODBIORCA = ? AND LOGIN_NADAWCA = ? LIMIT 10',

    getSendersQuery: 'SELECT DISTINCT LOGIN_NADAWCA, STATUS_WIADOMOSC, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK ' +
        'FROM Wiadomosc INNER JOIN Uzytkownik ON Wiadomosc.LOGIN_NADAWCA = Uzytkownik.LOGIN_UZYTKOWNIK WHERE LOGIN_ODBIORCA = ?',

    addRunQuery: 'INSERT INTO Bieg (DATA_BIEG, ID_TRASA, LOGIN_UZYTKOWNIK, NAZWA_BIEG) VALUES (?, ?, ?, ?)',

    editRunQuery: 'UPDATE Bieg SET NAZWA_BIEG = ?, ID_TRASA = ?, DATA_BIEG = ? WHERE ID_BIEG = ?',

    loginUserQuery: 'SELECT TYP_UZYTKOWNIK AS type, HASHED_PASS_UZYTKOWNIK AS pass, LOGIN_UZYTKOWNIK AS login FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    authUserQuery: 'SELECT TYP_UZYTKOWNIK AS type, LOGIN_UZYTKOWNIK AS login FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    getRunsQuery: 'SELECT ID_BIEG, DATA_BIEG, NAZWA_BIEG, POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK ' +
        'FROM Bieg INNER JOIN Trasa ON Trasa.ID_TRASA = Bieg.ID_TRASA ' +
        'INNER JOIN Uzytkownik ON Uzytkownik.LOGIN_UZYTKOWNIK = Bieg.LOGIN_UZYTKOWNIK WHERE BIEG_AKCEPTACJA = 1',

    isSignedQuery: 'SELECT COUNT(LOGIN_UZYTKOWNIK) AS volunter, (SELECT COUNT(LOGIN_UZYTKOWNIK ) ' +
        'FROM Uczestnicy_Bieg WHERE ID_BIEG = ? AND LOGIN_UZYTKOWNIK = ?) AS runner FROM Wolontariusze_Bieg WHERE ID_BIEG = ? AND LOGIN_UZYTKOWNIK = ?',

    signupVolunteryQuery: 'INSERT Wolontariusze_Bieg (ID_BIEG, LOGIN_UZYTKOWNIK) VALUES(?, ?)',

    signupRunnerQuery: 'INSERT Uczestnicy_Bieg (ID_BIEG, LOGIN_UZYTKOWNIK) VALUES(?, ?)',

    editRouteQuery: 'UPDATE Trasa SET POCZATEK_TRASA = ?, KONIEC_TRASA = ?, MIASTO_TRASA = ?, DLUGOSC_TRASA = ? WHERE ID_TRASA = ?',

    addResultsQuery: 'INSERT INTO Wyniki (LOGIN_UZYTKOWNIK, ID_BIEG, MIEJSCE, CZAS) VALUES(?,?,?,?)',

    confirmRun: 'UPDATE Bieg SET BIEG_AKCEPTACJA = 1 WHERE ID_BIEG = ?',

    removeUser: 'DELETE FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    findUserQuery: 'SELECT LOGIN_UZYTKOWNIK AS login FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',
    
    selectUnacceptedRuns: 'SELECT ID_BIEG, DATA_BIEG, NAZWA_BIEG, POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA, Bieg.ID_TRASA, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK FROM Bieg INNER JOIN Trasa ON Trasa.ID_TRASA = Bieg.ID_TRASA INNER JOIN Uzytkownik ON Uzytkownik.LOGIN_UZYTKOWNIK = Bieg.LOGIN_UZYTKOWNIK WHERE BIEG_AKCEPTACJA = 0',

    getFinishedRuns: 'SELECT ID_BIEG, DATA_BIEG, NAZWA_BIEG, POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK FROM Bieg_Zakonczony INNER JOIN Trasa ON Trasa.ID_TRASA = Bieg_Zakonczony.ID_TRASA INNER JOIN Uzytkownik ON Uzytkownik.LOGIN_UZYTKOWNIK = Bieg_Zakonczony.LOGIN_UZYTKOWNIK',

    getRunUsers: 'SELECT Uzytkownik.LOGIN_UZYTKOWNIK, Bieg_Zakonczony.NAZWA_BIEG, Bieg_Zakonczony.ID_BIEG, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK FROM Uczestnicy_Bieg_Zakonczony INNER JOIN ON Uzytkownik.LOGIN_UZYTKOWNIK = Uczestnicy_Bieg_Zakonczony.LOGIN_UZYTKOWNIK INNER JOIN ON Bieg_Zakonczony.ID_BIEG = Uczestnicy_Bieg_Zakonczony.ID_BIEG WHERE ID_BIEG = ?',

    getAllUsers: 'SELECT LOGIN_UZYTKOWNIK AS login, IMIE_UZYTKOWNIK AS name, NAZWISKO_UZYTKOWNIK AS surname, DATA_URODZENIA_UZYTKOWNIK AS date, TYP_UZYTKOWNIK AS type FROM Uzytkownik',

    showProfileQuery: 'SELECT IMIE_UZYTKOWNIK AS name, NAZWISKO_UZYTKOWNIK AS surname, DATA_URODZENIA_UZYTKOWNIK AS date, TYP_UZYTKOWNIK AS type FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ? ',

    showRunnersQuery: 'SELECT IMIE_UZYTKOWNIK AS name, NAZWISKO_UZYTKOWNIK AS surname, DATA_URODZENIA_UZYTKOWNIK AS date, TYP_UZYTKOWNIK AS type FROM Uczestnicy_Bieg INNER JOIN Uzytkownik ON Uczestnicy_Bieg.LOGIN_UZYTKOWNIK = Uzytkownik.LOGIN_UZYTKOWNIK WHERE ID_BIEG = ?',

    showRunsQuery: 'SELECT ID_BIEG, DATA_BIEG, NAZWA_BIEG, POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA, Bieg.ID_TRASA, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK FROM Bieg INNER JOIN Trasa ON Trasa.ID_TRASA = Bieg.ID_TRASA INNER JOIN Uzytkownik ON Uzytkownik.LOGIN_UZYTKOWNIK = Bieg.LOGIN_UZYTKOWNIK WHERE Bieg.LOGIN_UZYTKOWNIK = ?',

    getRunOrganizer: 'SELECT LOGIN_UZYTKOWNIK FROM Bieg WHERE ID_BIEG = ?',

};
