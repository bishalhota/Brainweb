export {}; // This ensures the file is treated as a module, avoiding global scope conflicts.

// Extending the Express Request interface to include a custom property (`userId`).
declare global {
    namespace Express {
       
        export interface Request {
            userId?: string; 
        }
    }
}