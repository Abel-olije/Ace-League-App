import { leagueManagement } from "../../models/leagueManagement/leaugueManagementModel";

const leagueDB = {
    async create(data: Object){
        const lm = new leagueManagement({...data});
        const user = await lm.save();
        return user;
    }
}
export default leagueDB;