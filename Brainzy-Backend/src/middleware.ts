
import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./config"; // 
import jwt from "jsonwebtoken"; // 

// Middleware to validate user authentication using a JWT token.
export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    const header = req.headers["authorization"];
    
    // Verifying the JWT token using the secret key.
    const decoded = jwt.verify(header as string, JWT_SECRET);

    
    if (decoded) {
        // @ts-ignore
        req.userId = decoded.id; 
        next(); 
    } else {
        
        res.status(401).json({ message: "Unauthorized User" });
    }
};