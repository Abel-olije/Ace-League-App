interface ClubReg {
    _id?: String;
    name: String;
    email: String;
    state: String;
    city: String;
    logo: String;
}

interface CoachReg {
    _id?: String;
    firstname: String;
    lastname: String;
    email: String;
    password: String;
}

interface FansReg {
    _id?: String;
    firstname: String;
    lastname: String;
    email: String;
    phone: String;
    nationality: String;
    password: String;
}

interface LeagueManagementReg {
    _id?: String;
    name: String;
    email: String;
}

interface PlayersReg {
    _id?: String;
    firstname: String;
    lastname: String;
    jerseynumber: String;
    position: String;
    nationality: String;
    club: String;
    isBanned: Boolean;
}