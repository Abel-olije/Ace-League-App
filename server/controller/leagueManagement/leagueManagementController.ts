import express, {Request, Response} from 'express'
import leagueDB from '../../services/leagueManagement/leaugeManagement'
import asyncHandler from 'express-async-handler';

const createLeague = asyncHandler( async function(req: Request, res: Response){
    const data = req.body;
    const user = await leagueDB.create(data)
    res.status(201).send(user);
    return;
})




